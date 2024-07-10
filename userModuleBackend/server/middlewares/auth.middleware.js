import AppError from "../utils/appError";

const isLoggedIn = function (req,res,next) {
    // app.use(cookieParser()); in app.js
    const {token} = req.cookies;

    if(!token){
        return next(new AppError("Unauthenticated, please login",401))
    }

    const tokenDetails = jwt.verify(token,process.env.JWT_SECRET);

    if(!tokenDetails){
        return next(new AppError("Unauthenticated, please login",401))
    }

    req.user = tokenDetails;

    // will go to next step (getProfile route)
    next();
}

export {
    isLoggedIn
}