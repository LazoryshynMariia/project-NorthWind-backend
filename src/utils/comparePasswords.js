// comparePasswords.js
import bcrypt from 'bcrypt';
export const comparePasswords = async (password, hashedPassword) => bcrypt.compare(password, hashedPassword);