import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import { makeInstructor, currentInstructor } from "../controllers/instructor";

router.post("/make-instructor", requireSignin, makeInstructor);
router.get("/current-instructor", requireSignin, currentInstructor);

module.exports = router;
