import createHttpError from "http-errors";
import { UserModel } from "../models/user.js";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await UserModel.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw createHttpError(409, "Email in use");
  }

  //   const hashedPassword = await ;

  const newUser = await UserModel.create({
    email,
    // password: hashedPassword
  });

  res.status(201).json(newUser);
};
