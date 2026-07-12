import { Article } from '../../models/article.js';
import { addSavesCountToStories } from '../../services/savedStories/getSavesCount.js';

export const getPopularStories = async (req, res, next) => {
  try {
    const popularStories = await Article.find().sort({ rate: -1 }).limit(10);
    const storiesWithSavesCount = await addSavesCountToStories(popularStories);

    res.status(200).json({
      status: 'success',
      data: storiesWithSavesCount,
    });
  } catch (error) {
    next(error);
  }
};
