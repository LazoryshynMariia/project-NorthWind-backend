import { Article } from '../../models/article.js';
import createHttpError from 'http-errors';

export const addStory = async (req, res) => {
  const note = await Article.create({...req.body, userId: req.user._id,});
  res.status(201).json(note);
};
