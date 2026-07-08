import { Router } from 'express';
import {
  getTravellers,
  getTopTravellers,
  getTravellerById,
} from '../controllers/users/index.js';

const usersRouter = Router();

usersRouter.get('/travellers/top', getTopTravellers);
usersRouter.get('/travellers', getTravellers);
usersRouter.get('/travellers/:travellerId', getTravellerById);

export default usersRouter;
