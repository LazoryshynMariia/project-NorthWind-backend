import createHttpError from 'http-errors';
import { Article } from '../../models/article.js';
import { SavedStoryModel } from '../../models/savedStory.js';

export const addSavedStory = async (userId, storyId) => {
  try {
    const story = await Article.exists({ _id: storyId });

    if (!story) {
      throw createHttpError(404, 'Story not found');
    }

    const saved = await SavedStoryModel.create({ userId, storyId });
    await Article.findByIdAndUpdate(storyId, { $inc: { rate: 1 } });

    return saved;
  } catch (error) {
    if (error.code === 11000) {
      throw createHttpError(409, 'Story already saved');
    }
    throw error;
  }
};
