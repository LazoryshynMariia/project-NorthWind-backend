import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      // Извлекаем токен из строки "Bearer <token>"
      token = req.headers.authorization.split(' ')[1]; 
    }

    // DoD: без токена — 401 Unauthorized
    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    // Декодируем токен с помощью секретного ключа из .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Ищем пользователя в MongoDB и исключаем пароль из выдачи
    req.user = await User.findById(decoded.id).select('-password');
    
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized, user not found' });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
};