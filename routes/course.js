import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// middleware
import { requireSignin, isInstructor } from "../middlewares";

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
} from "../controllers/course";

// Image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

// Course
router.post("/course", requireSignin, isInstructor, create);
router.get("/course/:slug", read);
router.put("/course/:slug", requireSignin, update);
router.post(
  "/course/video-upload/:instructorId",
  requireSignin,
  formidable(),
  uploadVideo
);
router.post("/course/video-remove/:instructorId", requireSignin, removeVideo);
router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);

module.exports = router;
