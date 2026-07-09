import { getMe as getMeService } from '../../services/users/getMe.js';

export const getMe = async (req, res, next) => {
  try {
    const user = await getMeService(req.user.id);
    res.status(200).json({
      status: 200,
      message: 'Successfully found user',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
