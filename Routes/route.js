import express from "express";

import {
  createMotor,
  deleteMotor,
  getMotor,
  getMotorById,
  updateMotor,
} from "../Controller/motorController.js";

const router = express.Router();

router.get("/", getMotor);
router.get("/find", getMotorById);
router.post("/create", createMotor);
router.put("/update", updateMotor);
router.delete("/delete", deleteMotor);

export default router;
