import { Article } from "../../models/article.js";
import createHttpError from "http-errors";
import { saveStoryToCloudinary } from "../../utils/index.js";

export const addStory = async (req, res) => {
  const { file, user } = req;
  if (!file) {
    throw createHttpError(400, "No file");
  }

  const article = await Article.create({
    ...req.body,
    img: "fake",
    ownerId: user._id,
    date: new Date(),
  });

  const result = await saveStoryToCloudinary(file.buffer, article._id);


const updatedArticle = await Article.findByIdAndUpdate(
  article._id,
  { img: result.secure_url },
  { new: true }
);

res.status(201).json(updatedArticle);

};
