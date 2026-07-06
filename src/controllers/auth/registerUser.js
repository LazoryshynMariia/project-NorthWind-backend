import createHttpError from "http-errors";
import { UserModel } from "../../models/user.js";
import { hashPassword } from "../../utils/hashPassword.js";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await UserModel.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw createHttpError(409, "Email in use");
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await UserModel.create({
    email: email.toLowerCase(),
    password: hashedPassword,
  });

  res.status(201).json(newUser);
};
