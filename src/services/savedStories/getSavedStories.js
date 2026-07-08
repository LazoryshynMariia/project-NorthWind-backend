import { SavedStoryModel } from '../../models/savedStory.js';

export const getSavedStories = async (userId, page = 1, perPage = 10) => {
  const skip = (page - 1) * perPage;

  const [data, totalItems] = await Promise.all([
    SavedStoryModel.find({ userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(perPage))
      .populate('storyId'),
    SavedStoryModel.countDocuments({ userId }),
  ]);

  return {
    data,
    page: Number(page),
    perPage: Number(perPage),
    totalItems,
    totalPages: Math.ceil(totalItems / Number(perPage)),
  };
};
