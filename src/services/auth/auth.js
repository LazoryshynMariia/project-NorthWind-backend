import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';

import { UserModel } from '../../models/user.js';
import { comparePasswords } from '../../utils/comparePasswords.js';
import {
  JWT_ACCESS_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN,
} from '../../constants/index.js';

export const login = async ({ email, password }) => {
  const user = await UserModel.findOne({
    email: email.toLowerCase(),
  });

  if (!user) {
    throw createHttpError(401, 'Email or password is incorrect');
  }

  const isPasswordValid = await comparePasswords(password, user.password);

  if (!isPasswordValid) {
    throw createHttpError(401, 'Email or password is incorrect');
  }

  if (!process.env.JWT_SECRET) {
    throw createHttpError(500, 'JWT_SECRET is not configured');
  }

  const accessToken = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: JWT_ACCESS_EXPIRES_IN },
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: JWT_REFRESH_EXPIRES_IN },
  );

  await UserModel.findByIdAndUpdate(user.id, { refreshToken });

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      theme: user.theme,
    },
  };
};

export const refreshSession = async (refreshToken) => {
  if (!refreshToken) {
    throw createHttpError(401, 'Refresh token is missing');
  }

  if (!process.env.JWT_SECRET) {
    throw createHttpError(500, 'JWT_SECRET is not configured');
  }

  let payload;

  try {
    payload = jwt.verify(refreshToken, process.env.JWT_SECRET);
  } catch {
    throw createHttpError(401, 'Invalid refresh token');
  }

  const user = await UserModel.findById(payload.id);

  if (!user || user.refreshToken !== refreshToken) {
    throw createHttpError(401, 'Invalid refresh token');
  }

  const newAccessToken = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: JWT_ACCESS_EXPIRES_IN },
  );

  const newRefreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: JWT_REFRESH_EXPIRES_IN },
  );

  await UserModel.findByIdAndUpdate(user.id, {
    refreshToken: newRefreshToken,
  });

  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  };
};