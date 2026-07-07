import { refreshSession } from '../../services/auth/auth.js';

export const refreshController = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    const data = await refreshSession(refreshToken);

    res.status(200).json({
      status: 200,
      message: 'Session refreshed successfully',
      data,
    });
  } catch (error) {
    next(error);
  }
};