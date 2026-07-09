import { Router } from 'express';
import { celebrate } from 'celebrate';

import { auth } from '../controllers/index.js';
import { auth as authValidation } from '../validations/index.js';
import { authenticate } from '../middleware/authenticate.js';

const authRouter = Router();

// Public routes
authRouter.post(
  '/register',
  celebrate(authValidation.registerUserSchema),
  auth.registerUser,
);
authRouter.post('/login', authValidation.loginValidation, auth.loginController);
authRouter.post(
  '/refresh',
  authValidation.refreshValidation,
  auth.refreshController,
);

// Private routes
authRouter.post('/logout', authenticate, auth.logoutController);
authRouter.patch(
  '/theme',
  authenticate,
  celebrate(authValidation.updateThemeSchema),
  auth.updateTheme,
);

export default authRouter;
