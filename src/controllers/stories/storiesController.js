import { Article } from "../../models/article.js";
import createHttpError from "http-errors";

export const addStory = async (req, res) => {
  const { file, user } = req;
  if (!file) {
    throw createHttpError(400, "No file");
  }

  //const result = await saveFileToCloudinary(file.buffer, user._id);

  const article = await Article.create({
    ...req.body,
    ownerId: "6881563901add19ee16fcffa",
    img: "uhhu",
    //ownerId: req.user._id,
    date: new Date(),
  });
  res.status(201).json(article);
};
