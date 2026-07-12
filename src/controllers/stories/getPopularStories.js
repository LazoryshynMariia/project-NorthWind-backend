import { Article } from '../../models/article.js';

export const getPopularStories = async (req, res, next) => {
  try {
    const popularStories = await Article.find().sort({ rate: -1 }).limit(10);

    res.status(200).json({
      status: 'success',
      data: popularStories,
    });
  } catch (error) {
    next(error);
  }
};
