import mongoose from "mongoose";
import { Article } from "../models/article.js";

export const getAllStories = async (req, res, next) => {
  try {
    const { page = 1, perPage = 10, author } = req.query;
    const skip = (page - 1) * perPage;

    const filter = {};
    if (author) {
      filter.ownerId = new mongoose.Types.ObjectId(author);
    }

    const [data, totalItems] = await Promise.all([
      Article.find(filter)
        .sort({ date: -1 })
        .skip(skip)
        .limit(Number(perPage))
        .populate("category")
        .populate("ownerId"),
      Article.countDocuments(filter),
    ]);

    res.status(200).json({
      data,
      page: Number(page),
      perPage: Number(perPage),
      totalItems,
      totalPages: Math.ceil(totalItems / Number(perPage)),
    });
  } catch (error) {
    next(error);
  }
};
