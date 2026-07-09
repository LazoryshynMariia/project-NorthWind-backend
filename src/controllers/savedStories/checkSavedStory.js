import { checkSavedStory } from "../../services/savedStories/checkSavedStory.js";

export const checkSavedStoryController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { storyId } = req.params;

    const result = await checkSavedStory(userId, storyId);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
