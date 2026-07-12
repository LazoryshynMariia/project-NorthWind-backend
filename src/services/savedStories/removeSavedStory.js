import createHttpError from 'http-errors';
import { Article } from '../../models/article.js';
import { SavedStoryModel } from '../../models/savedStory.js';

export const removeSavedStory = async (userId, storyId) => {
  const result = await SavedStoryModel.deleteOne({ userId, storyId });

  if (result.deletedCount === 0) {
    throw createHttpError(404, 'Saved story not found');
  }

  await Article.findByIdAndUpdate(storyId, { $inc: { rate: -1 } });

  return result;
};
