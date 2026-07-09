import createHttpError from "http-errors";
import { UserModel } from "../../models/user.js";

export const updateTheme = async (req, res, next) => {
  try{
    const { _id: userId } = req.user;
    const { theme } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { theme },
      { new: true },
    );

    if (!updatedUser) {
     throw createHttpError(404, "User not found");
    }

     res.status(200).json({
      theme: updatedUser.theme,
    });
  } catch (error) {
    next(error)
  }
};
