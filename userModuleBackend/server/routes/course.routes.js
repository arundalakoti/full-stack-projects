import {Router} from "express";
import {createCourse, deleteCourse, getAllCourses, getLecturesByCourseId, updateCourse} from "../controllers/course.controller.js"
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

//when we have same route both for post and get
// router.route("/").get(getAllCourses).post(postCall);

router
    .route("/")
    .get(getAllCourses)
    .post(createCourse);

//before accessing the lectures user must be logged in(isLoggedIn --> middleware)
//put --> update existing info
router
    .route("/:courseId")
    .get(isLoggedIn,getLecturesByCourseId)
    .put(updateCourse)
    .delete(deleteCourse);

export default router;