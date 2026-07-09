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
