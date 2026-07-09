import { getSavedStories as getSavedStoriesService } from '../../services/savedStories/getSavedStories.js';

export const getSavedStoriesController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { page = 1, perPage = 10 } = req.query;

    const result = await getSavedStoriesService(userId, page, perPage);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
