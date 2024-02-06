import expres from "express"
import { registerUser } from "../controllers/userControllers"

const router = expres.Router()

router.post("/register", registerUser)

export default router
