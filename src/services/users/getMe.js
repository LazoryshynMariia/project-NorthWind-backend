import { UserModel } from '../../models/user.js';

export const getMe = async (userId) => {
  return UserModel.findById(userId).select('-password -refreshToken');
};
