import createHttpError from 'http-errors';

import { UserModel } from '../../models/user.js';
import { saveAvatarToCloudinary } from '../../utils/index.js';

export const updateAvatar = async (req, res, next) => {
  try {
    const { file, user } = req;

    if (!file) {
      throw createHttpError(400, 'No file');
    }

    const result = await saveAvatarToCloudinary(file.buffer, user._id);

    const updatedUser = await UserModel.findByIdAndUpdate(
      user._id,
      { avatarUrl: result.secure_url },
      { new: true, runValidators: true },
    ).select('-password -refreshToken');

    if (!updatedUser) {
      throw createHttpError(404, 'User not found');
    }

    res.status(200).json({
      status: 200,
      message: 'Avatar updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
