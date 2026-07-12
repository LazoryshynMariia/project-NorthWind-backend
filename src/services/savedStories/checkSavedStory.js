import createHttpError from 'http-errors';

import { Article } from '../../models/article.js';
import { SavedStoryModel } from '../../models/savedStory.js';

export const checkSavedStory = async (userId, storyId) => {
  const story = await Article.exists({ _id: storyId });

  if (!story) {
    throw createHttpError(404, 'Story not found');
  }

  const saved = await SavedStoryModel.findOne({ userId, storyId });
  return { isSaved: !!saved };
};
