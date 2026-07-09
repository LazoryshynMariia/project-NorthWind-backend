import { removeSavedStory } from "../../services/savedStories/removeSavedStory.js";

export const removeSavedStoryController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { storyId } = req.params;

    await removeSavedStory(userId, storyId);

    res.status(200).json({ message: "Removed" });
  } catch (error) {
    next(error);
  }
};
