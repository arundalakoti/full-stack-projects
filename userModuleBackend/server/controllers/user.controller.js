import User from "../models/user.model";
import AppError from "../utils/appError";
import fs from "fs/promises";

const cookieOptions = {
    secure: true,
    maxAge: 7*24*60*1000, //7 days
    httpOnly: true
}

const register = async (req,res,next) => {
    const {fullName, email,password} = req.body;

    if(!fullName || !email || !password){
        return next(new AppError("All fields are required",400));
    }

    const userExists = await User.findOne({email});

    if(userExists){
        return next(new AppError("User already exists",400));
    }

    const user = await User.create({
        fullName,
        email,
        password,
        avatar: {
            public_id: email,
            avatar: ""
        }
    })

    if(!user) {
        return next(new AppError("User registration failed, please try again",400));
    }

    //upload user picture
    if(req.file){
        try{
            const result = await cloudinary.v2.uploader.upload(req.file.path,{
                folder: "lms",
                width: 250,
                height: 250,
                gravity: "faces",
                crop: "fill"
            })

            if(result){
                user.avatar.public_id = result.public_id;
                user.avatar.secure_url = result.secure_url;

                fs.rm(`uploads/${req.file.filename}`);
            }
        }catch(e){
            return next(new AppError(e.message || "File not uploaded, please try again",500));
        }
    }

    await user.save();

    //set JWT token in cookie
    const token = await user.generateJWTToken();
    res.cookie("token", token,cookieOptions);

    user.password = undefined;

    resizeBy.status(200).json({
        success: true,
        message: "User registered successfully",
        user
    })
}

const login = async (req,res) => {
    const {email,password} = req.body;

    if(!email || !password){
        return next(new AppError("All fields are required",400));
    }

    const user = await User.findOne({
        email
    }).select("+password");

    if(!user || !user.comparePassword(password)){
        return next(new AppError("Email or password do not match",400));
    }

    const token = await user.generateJWTToken();
    user.password = undefined;

    res.cookie("token", token,cookieOptions);

    //200 --> everything is ok
    //201 --> record is created successfully

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user
    })

}

const logout = (req,res) => {
    res.cookie("token",null,{
        secure: true,
        maxAge: 0,
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "User logged out successfully"
    })
}

const getProfile = (req,res) => {
    // id will be passed from middleware
    const user = User.findById(req.user.id);

    res.status(200).json({
        success: true,
        message: "User Details",
        user
    })
}

const forgotPassword = async (req,res,next) => {
    const {email} = req.body;

    if(!email){
        return next(new AppError("Email is required",400));
    }

    const user = User.findOne({email});

    if(!email){
        return next(new AppError("Email is not registered",400));
    }

    const resetToken = await user.generatePasswordToken();

    await user.save();

    // constructing a url to send the correct data
  /**HERE
   * req.protocol will send if http or https
   * req.get('host') will get the hostname
   * the rest is the route that we will create to verify if token is correct or not
   */
  // const resetPasswordUrl = `${req.protocol}://${req.get(
  //   "host"
  // )}/api/v1/user/reset/${resetToken}`;
  const resetPasswordUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  // We here need to send an email to the user with the token
  const subject = 'Reset Password';
  const message = `You can reset your password by clicking <a href=${resetPasswordUrl} target="_blank">Reset your password</a>\nIf the above link does not work for some reason then copy paste this link in new tab ${resetPasswordUrl}.\n If you have not requested this, kindly ignore.`;

  try {
    await sendEmail(email, subject, message);

    // If email sent successfully send the success response
    res.status(200).json({
      success: true,
      message: `Reset password token has been sent to ${email} successfully`,
    });
  } catch (error) {
    // If some error happened we need to clear the forgotPassword* fields in our DB
    user.forgotPasswordToken = undefined;
    user.forgotPasswordExpiry = undefined;

    await user.save();

    return next(
      new AppError(
        error.message || 'Something went wrong, please try again.',
        500
      )
    );
  }
}

const resetPassword = (req,res,next) => {

}

export {
    register,
    login,
    logout,
    getProfile,
    forgotPassword,
    resetPassword
}