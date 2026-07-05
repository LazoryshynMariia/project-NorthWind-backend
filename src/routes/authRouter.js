import { Router } from 'express';

import { loginValidation } from '../validations/auth/loginValidation.js';
import { loginController } from '../controllers/auth/loginController.js';

const authRouter = Router();

authRouter.post('/login', loginValidation, loginController);

export default authRouter;