import createHttpError from 'http-errors';
import { getTravellerById as getTravellerByIdService } from '../../services/users/getTravellerById.js';

export async function getTravellerById(req, res, next) {
  try {
    const { travellerId } = req.params;
    const traveller = await getTravellerByIdService(travellerId);

    if (!traveller) {
      throw createHttpError(404, 'Traveller not found');
    }

    res.json({
      status: 200,
      message: 'Successfully found traveller',
      data: traveller,
    });
  } catch (error) {
    next(error);
  }
}
