import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import {
  makeInstructor,
  currentInstructor,
  instructorCourses,
} from "../controllers/instructor";

router.post("/make-instructor", requireSignin, makeInstructor);
router.get("/current-instructor", requireSignin, currentInstructor);

router.get("/instructor-courses", requireSignin, instructorCourses);

module.exports = router;
