const mongoose = require("mongoose");
const { Schema } = mongoose;
const JWT = require("jsonwebtoken");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [5, "Name should be more than 5 chars"],
      maxLength: [50, "Name should be less than 50 chars"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      unique: [true, "Already registered email"],
    },
    password: {
      type: String,
      select: false,
    },
    forgotPasswordToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//for now password is directly stored in db without any encryption and anyone can read that info which is not safe
//so we need to encrypt first. sol is to call encrypt func everytime we are saving password to the db.
//simple sol===> precondition

userSchema.pre("save", async function (next) {
  //if password is not modified
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

userSchema.methods = {
  jwtToken() {
    return JWT.sign({ id: this._id, email: this.email }, process.env.SECRET, {
      expireIn: "24h",
    });
  },
};

//as per convention final name in mongodb will be (User --> users)
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
