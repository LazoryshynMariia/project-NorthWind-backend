import { isValidObjectId } from 'mongoose';
import { UserModel } from '../../models/user.js';

export async function getTravellerById(travellerId) {
  if (!isValidObjectId(travellerId)) {
    return null;
  }

  return UserModel.findById(travellerId).select('name avatarUrl articlesAmount').lean();
}
