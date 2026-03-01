import dotenv from "dotenv";
dotenv.config();
import { Router } from "express";
import { AuthService } from "../controllers/auth.controller.js";

const router = Router();

// routes Auth
router.post("/register", async (req, res) => {
    try {
        const user = await AuthService.register(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const data = await AuthService.login(req.body);
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
