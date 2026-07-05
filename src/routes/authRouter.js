import { Router } from 'express';

import { loginValidation } from '../validations/auth/loginValidation.js';
import { loginController } from '../controllers/auth/loginController.js';
import { logoutController } from '../controllers/auth/logoutController.js';
import { authenticate } from '../middleware/authenticate.js';

const authRouter = Router();

authRouter.post('/login', loginValidation, loginController);

authRouter.post('/logout', authenticate, logoutController);

export default authRouter;