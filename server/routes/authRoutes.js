import { Router } from "express";
import { registerUser, loginUser, authenticateUser } from "../controllers/authController.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
//router.get("/verify-email", verifyEmail);
router.post("/authenticate", authenticateUser); // New endpoint for authentication

export default router;