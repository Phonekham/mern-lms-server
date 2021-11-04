import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// middleware
import { requireSignin, isInstructor, isEnrolled } from "../middlewares";

// controllers
import {
  uploadImage,
  removeImage,
  create,
  read,
  uploadVideo,
  removeVideo,
  addLesson,
  update,
  removeLesson,
  updateLesson,
  publishCourse,
  unpublishCourse,
  courses,
  readPublic,
  checkEnrollment,
  freeEnrollment,
  userCourses,
  markCompleted,
  listCompleted,
  markIncomplete,
} from "../controllers/course";

// Image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

// Course
router.post("/course", requireSignin, isInstructor, create);
router.get("/course/:slug", read);
router.put("/course/:slug", requireSignin, update);
router.get("/course/public/:slug", readPublic);
router.post(
  "/course/video-upload/:instructorId",
  requireSignin,
  formidable(),
  uploadVideo
);
router.put("/course/publish/:courseId", requireSignin, publishCourse);
router.put("/course/unpublish/:courseId", requireSignin, unpublishCourse);
router.post("/course/video-remove/:instructorId", requireSignin, removeVideo);
router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);
router.put("/course/:slug/:lessonId", requireSignin, removeLesson);
router.post("/course/lesson/:courseId/:lessonId", requireSignin, updateLesson);
router.get("/courses", courses);
router.get("/check-enrollment/:courseId", requireSignin, checkEnrollment);
router.post("/free-enrollment/:courseId", requireSignin, freeEnrollment);
router.get("/user-courses", requireSignin, userCourses);
router.get("/user/course/:slug", requireSignin, isEnrolled, read);
// mark completed
router.post("/mark-completed", requireSignin, markCompleted);
router.post("/list-completed", requireSignin, listCompleted);
router.post("/mark-incomplete", requireSignin, markIncomplete);

module.exports = router;
