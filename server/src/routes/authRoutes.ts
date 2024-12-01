import { Router } from "express";
import { register, login, logout } from "../controllers/authController";
import validate from "../middleware/validate";
import { loginSchema, registerSchema } from "../schemas/authSchemas";
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/logout", authenticate, logout);

export default router;
