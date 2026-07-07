import createHttpError from "http-errors";
import { SavedStoryModel } from "../../models/savedStory.js";

export const addSavedStory = async (userId, storyId) => {
  try {
    const saved = await SavedStoryModel.create({ userId, storyId });
    return saved;
  } catch (error) {
    if (error.code === 11000) {
      throw createHttpError(409, "Story already saved");
    }
    throw error;
  }
};

export const removeSavedStory = async (userId, storyId) => {
  const result = await SavedStoryModel.deleteOne({ userId, storyId });

  if (result.deletedCount === 0) {
    throw createHttpError(404, "Saved story not found");
  }

  return result;
};

export const checkSavedStory = async (userId, storyId) => {
  const saved = await SavedStoryModel.findOne({ userId, storyId });
  return { isSaved: !!saved };
};
