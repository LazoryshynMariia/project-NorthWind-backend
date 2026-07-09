import { Router } from "express";
import { celebrate } from "celebrate";

import { auth as ctrl } from "../controllers/index.js";
import { registerUserSchema } from '../validations/auth/registerValidation.js';
import { loginValidation } from '../validations/auth/loginValidation.js';
import { updateThemeSchema } from '../validations/auth/updateThemeSchema.js';
import { authenticate } from "../middleware/authenticate.js";



export default authRouter;
import { auth as ctrl } from '../controllers/index.js';
import { refreshValidation } from '../validations/auth/refreshValidation.js';
import { registerUserSchema } from '../validations/auth/registerValidation.js';
import { loginController } from '../controllers/auth/loginController.js';
import { logoutController } from '../controllers/auth/logoutController.js';
import { refreshController } from '../controllers/auth/refreshController.js';
import { authenticate } from '../middleware/authenticate.js';

const authRouter = Router();

authRouter.post("/register", celebrate(registerUserSchema), ctrl.registerUser);
authRouter.post("/login", loginValidation, ctrl.loginController);
authRouter.patch("/theme", authenticate, celebrate(updateThemeSchema), ctrl.updateTheme);

// Public routes
authRouter.post('/register', celebrate(registerUserSchema), ctrl.registerUser);
authRouter.post('/refresh', refreshValidation, refreshController);

// Private routes
authRouter.post('/logout', authenticate, logoutController);

export default authRouter;
