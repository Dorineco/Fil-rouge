import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { createAlert, getAlerts } from "../controllers/alert.controller.js";

const router = Router();

router.post("/", verifyToken, createAlert);
router.get("/", verifyToken, getAlerts);

export default router;