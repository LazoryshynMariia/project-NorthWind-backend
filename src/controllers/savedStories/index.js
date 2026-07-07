// TODO: удалить заглушку userId после подключения реального authMiddleware
const MOCK_USER_ID = "507f1f77bcf86cd799439011";

import * as savedStoriesService from "../../services/savedStories/index.js";

export const addSavedStoryController = async (req, res, next) => {
  try {
    const userId = req.user?.id || MOCK_USER_ID;
    const { storyId } = req.body;

    const saved = await savedStoriesService.addSavedStory(userId, storyId);

    res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
};

export const removeSavedStoryController = async (req, res, next) => {
  try {
    const userId = req.user?.id || MOCK_USER_ID;
    const { storyId } = req.params;

    await savedStoriesService.removeSavedStory(userId, storyId);

    res.status(200).json({ message: "Removed" });
  } catch (error) {
    next(error);
  }
};

export const checkSavedStoryController = async (req, res, next) => {
  try {
    const userId = req.user?.id || MOCK_USER_ID;
    const { storyId } = req.params;

    const result = await savedStoriesService.checkSavedStory(userId, storyId);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
