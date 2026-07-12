import { SavedStoryModel } from '../../models/savedStory.js';

export const getSavesCountByStoryId = (storyId) => {
  return SavedStoryModel.countDocuments({ storyId });
};

export const addSavesCountToStories = async (stories) => {
  const plainStories = stories.map((story) =>
    typeof story.toObject === 'function' ? story.toObject() : story,
  );

  const storyIds = plainStories.map((story) => story._id);

  const savesCounts = await SavedStoryModel.aggregate([
    { $match: { storyId: { $in: storyIds } } },
    { $group: { _id: '$storyId', savesCount: { $sum: 1 } } },
  ]);

  const savesCountMap = savesCounts.reduce((acc, item) => {
    acc[item._id.toString()] = item.savesCount;
    return acc;
  }, {});

  return plainStories.map((story) => ({
    ...story,
    savesCount: savesCountMap[story._id.toString()] || 0,
  }));
};

export const addSavesCountToStory = async (story) => {
  const plainStory =
    typeof story.toObject === 'function' ? story.toObject() : story;
  const savesCount = await getSavesCountByStoryId(plainStory._id);

  return {
    ...plainStory,
    savesCount,
  };
};
