import { SavedStoryModel } from "../../models/savedStory.js";

export const checkSavedStory = async (userId, storyId) => {
  const saved = await SavedStoryModel.findOne({ userId, storyId });
  return { isSaved: !!saved };
};
