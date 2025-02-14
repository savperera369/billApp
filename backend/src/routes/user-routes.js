import { Router } from 'express';
import { userLogin, userSignUp } from "../controllers/user-controllers.js";
import { loginValidator, signUpValidator, validate } from "../utils/validators.js";

const userRoutes = Router();

userRoutes.post("/signup", validate(signUpValidator), userSignUp);
userRoutes.post("/login", validate(loginValidator), userLogin);

export default userRoutes;