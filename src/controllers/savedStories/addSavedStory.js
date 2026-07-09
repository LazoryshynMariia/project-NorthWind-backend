import { addSavedStory } from "../../services/savedStories/addSavedStory.js";

export const addSavedStoryController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { storyId } = req.body;

    const saved = await addSavedStory(userId, storyId);

    res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
};
