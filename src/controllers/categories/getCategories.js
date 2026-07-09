import { getCategories as getCategoriesService } from "../../services/categories/getCategories.js";

export async function getCategories(req, res, next) {
  try {
    const categories = await getCategoriesService();

    return res.status(200).json({
      status: 200,
      message: "Successfully found categories",
      data: categories,
    });
  } catch (error) {
    next(error);
  }
}
