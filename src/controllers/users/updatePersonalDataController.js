import { UserModel } from "../../models/user.js";
import createHttpError from "http-errors";

import { saveAvatarToCloudinary } from "../../utils/index.js";

export const updatePersonalData = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { name } = req.body;
    const updateData = {};

    if (name !== undefined) {
      updateData.name = name;
    }

    if (req.file) {
      const result = await saveAvatarToCloudinary(req.file.buffer, userId);
      updateData.avatarUrl = result.secure_url;
    }

    if (Object.keys(updateData).length === 0) {
      throw createHttpError(400, "No data to update");
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true },
    ).select("-password -refreshToken");

    if (!updatedUser) {
      return next(createHttpError(404, "User not found"));
    }

    res.status(200).json({
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
