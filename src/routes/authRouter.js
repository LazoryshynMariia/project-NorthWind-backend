import { Router } from "express";
import { celebrate } from "celebrate";

import { auth as ctrl } from "../controllers/index.js";
import { registerUserSchema } from '../validations/auth/registerValidation.js';
import { loginValidation } from '../validations/auth/loginValidation.js';
import { updateThemeSchema } from '../validations/auth/updateThemeSchema.js';
import { authenticate } from "../middleware/authenticate.js";

const authRouter = Router();

authRouter.post("/register", celebrate(registerUserSchema), ctrl.registerUser);
authRouter.post("/login", loginValidation, ctrl.loginController);
authRouter.patch("/theme", authenticate, celebrate(updateThemeSchema), ctrl.updateTheme);

export default authRouter;