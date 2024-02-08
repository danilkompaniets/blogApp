import expres from "express";
import {
  loginUser,
  registerUser,
  userProfile,
} from "../controllers/userControllers";
import { authGuard } from "../middleware/authMiddleware";

const router = expres.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);

export default router;
