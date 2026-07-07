import { Router } from 'express';
import { celebrate } from 'celebrate';

import { auth as ctrl } from '../controllers/index.js';
import { loginValidation } from '../validations/auth/loginValidation.js';
import { refreshValidation } from '../validations/auth/refreshValidation.js';
import { registerUserSchema } from '../validations/auth/registerValidation.js';
import { loginController } from '../controllers/auth/loginController.js';
import { logoutController } from '../controllers/auth/logoutController.js';
import { refreshController } from '../controllers/auth/refreshController.js';
import { authenticate } from '../middleware/authenticate.js';

const authRouter = Router();

// Public routes
authRouter.post('/register', celebrate(registerUserSchema), ctrl.registerUser);
authRouter.post('/login', loginValidation, loginController);
authRouter.post('/refresh', refreshValidation, refreshController);

// Private routes
authRouter.post('/logout', authenticate, logoutController);

export default authRouter;
