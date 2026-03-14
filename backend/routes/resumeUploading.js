import express from "express";
import multer from "multer";
import { parseResume } from "../controller/parseController.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/parseResume", upload.single("resume"), parseResume);

export default router;
