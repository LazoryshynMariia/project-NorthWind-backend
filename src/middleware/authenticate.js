import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';

import { UserModel } from '../models/user.js';

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw createHttpError(401, 'Authorization header missing');
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      throw createHttpError(401, 'Invalid authorization header');
    }

    if (!process.env.JWT_SECRET) {
      throw createHttpError(500, 'JWT_SECRET is not configured');
    }

    let payload;

    try {
      payload = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      throw createHttpError(401, 'Invalid or expired token');
    }

    const user = await UserModel.findById(payload.id);

    if (!user) {
      throw createHttpError(401, 'User not found');
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};
