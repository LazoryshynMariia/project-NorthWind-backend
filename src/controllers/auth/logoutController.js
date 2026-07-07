import { UserModel } from '../../models/user.js';

export const logoutController = async (req, res, next) => {
  try {
    await UserModel.findByIdAndUpdate(req.user.id, {
      refreshToken: null,
    });

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};