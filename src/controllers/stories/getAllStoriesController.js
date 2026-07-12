import mongoose from 'mongoose';
import { Article } from '../../models/article.js';
import { addSavesCountToStories } from '../../services/savedStories/getSavesCount.js';

export const getAllStories = async (req, res, next) => {
  try {
    const { page = 1, perPage = 10, author: queryAuthor } = req.query;

    const headerAuthor = req.get('autor');
    const author = queryAuthor || headerAuthor;

    const skip = (Number(page) - 1) * Number(perPage);

    const filter = {};

    if (author) {
      if (!mongoose.isValidObjectId(author)) {
        return res.status(400).json({
          status: 400,
          message: 'Invalid author id',
        });
      }

      filter.ownerId = new mongoose.Types.ObjectId(author);
    }

    const [data, totalItems] = await Promise.all([
      Article.find(filter)
        .sort({ date: -1 })
        .skip(skip)
        .limit(Number(perPage))
        .populate('category')
        .populate('ownerId', 'name avatarUrl'),
      Article.countDocuments(filter),
    ]);

    const storiesWithSavesCount = await addSavesCountToStories(data);

    return res.status(200).json({
      data: storiesWithSavesCount,
      page: Number(page),
      perPage: Number(perPage),
      totalItems,
      totalPages: Math.ceil(totalItems / Number(perPage)),
    });
  } catch (error) {
    next(error);
  }
};
