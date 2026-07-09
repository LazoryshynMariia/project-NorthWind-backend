import { Types } from 'mongoose';
import createHttpError from 'http-errors';

import { Article } from '../../models/article.js';
import { saveStoryToCloudinary } from '../../utils/index.js';

export const addStory = async (req, res) => {
  const { file, user } = req;
  if (!file) {
    throw createHttpError(400, 'No file');
  }

  const articleId = new Types.ObjectId();
  const result = await saveStoryToCloudinary(file.buffer, articleId);

  const article = await Article.create({
    _id: articleId,
    ...req.body,
    img: result.secure_url,
    ownerId: user._id,
    date: new Date(),
  });

  res.status(201).json(article);
};
