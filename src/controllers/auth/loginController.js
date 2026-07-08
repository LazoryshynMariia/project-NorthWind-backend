import { login } from '../../services/auth/auth.js';

export const loginController = async (req, res, next) => {
  try {
    const result = await login(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully logged in',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};