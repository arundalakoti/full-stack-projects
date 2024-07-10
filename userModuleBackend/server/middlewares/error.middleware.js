const errorMiddleware = (error,req,res,next) => {
    res.statusCode = res.statusCode || 500;

    res.message = res.message || "Something went wrong";

    return res.status(res.statusCode).json({
        success: false,
        message: res.message,
        stack: res.stack,
    })
}

export default errorMiddleware;