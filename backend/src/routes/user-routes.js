import { Router } from 'express';
import { userLogin, userSignUp, userLogout } from "../controllers/user-controllers.js";
import { loginValidator, signUpValidator, validate } from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";

const userRoutes = Router();

userRoutes.post("/signup", validate(signUpValidator), userSignUp);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/logout", verifyToken, userLogout);

export default userRoutes;