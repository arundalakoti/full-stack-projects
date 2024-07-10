import Course from "../models/course.model.js"
import AppError from "../utils/appError.js";

export const getAllCourses = async (req,res,next) => {
    try {
        const courses = Course.find({}).select("-lectures");

        res.status(200).json({
            success: true,
            messages: "All courses",
            courses
        })
    } catch (error) {
        return next(new AppError(error.message,500));
    }
}

export const getLecturesByCourseId = async (req,res,next) => {
    try {
        const { courseId } = req.params;
        const course = Course.findById(courseId);

        if(!course){
             return next(new AppError("Invalid course Id",400));
        }

        res.status(200).json({
            success: true,
            message: "Lectures fetched successfully",
            lectures: course.lectures
        })
    } catch (error) {
        return next(new AppError(error.message,500));
    }
}

export const createCourse = async (req,res,next) => {

}

export const updateCourse = async (req,res,next) => {

}

export const deleteCourse = async (req,res,next) => {

}