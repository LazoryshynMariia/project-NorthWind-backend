import { Article } from "../../models/article.js";

export async function getRecommendedStories() {
  return Article.find().sort({ rate: -1 }).limit(3);
}
