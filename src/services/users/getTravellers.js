import { UserModel } from "../../models/user.js";

export const getTravellersService = async ({ page, perPage }) => {
  const skip = (page - 1) * perPage;

  const [travellers, totalItems] = await Promise.all([
    UserModel.find({}, "_id name avatarUrl articlesAmount")
      .sort({ articlesAmount: -1, name: 1 })
      .skip(skip)
      .limit(perPage),

    UserModel.countDocuments(),
  ]);

  return {
    travellers,
    totalItems,
  };
};

export const getTopTravellersService = async () => {
  return UserModel.find({}, "_id name avatarUrl articlesAmount")
    .sort({ articlesAmount: -1, name: 1 })
    .limit(12);
};
