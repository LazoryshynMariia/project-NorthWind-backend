import { CategoryModel } from "../../models/index.js";

export async function getCategories() {
  return CategoryModel.find();
}
