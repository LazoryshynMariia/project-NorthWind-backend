import { UserModel } from "../../models/user.js";
import createHttpError from "http-errors";

export const updatePersonalData = async (req, res, next) => {
  try {
    const userId = req.user._id; // припускаємо, що middleware автентифікації кладе користувача в req.user
    const { name } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { name },
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
