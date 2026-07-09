import createHttpError from "http-errors";
import { SavedStoryModel } from "../../models/savedStory.js";

export const removeSavedStory = async (userId, storyId) => {
  const result = await SavedStoryModel.deleteOne({ userId, storyId });

  if (result.deletedCount === 0) {
    throw createHttpError(404, "Saved story not found");
  }

  return result;
};
