import { isValidObjectId } from "mongoose";
import { Article } from "../../models/article.js";

export async function getStoryById(storyId) {
  if (!isValidObjectId(storyId)) {
    return null;
  }

  return Article.findById(storyId);
}
