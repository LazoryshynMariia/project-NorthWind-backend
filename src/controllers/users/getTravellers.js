import {
  getTravellersService,
  getTopTravellersService,
} from "../../services/users/getTravellers.js";

export const getTravellers = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const perPage = Number(req.query.perPage) || 12;

    const { travellers, totalItems } = await getTravellersService({
      page,
      perPage,
    });

    const totalPages = Math.ceil(totalItems / perPage);

    res.json({
      data: travellers,
      page,
      perPage,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    });
  } catch (error) {
    next(error);
  }
};

export const getTopTravellers = async (req, res, next) => {
  try {
    const travellers = await getTopTravellersService();

    res.json({
      data: travellers,
    });
  } catch (error) {
    next(error);
  }
};
