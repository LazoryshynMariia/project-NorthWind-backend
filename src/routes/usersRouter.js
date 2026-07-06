import { Router } from 'express';
import { getTravellerById } from '../controllers/users/getTravellerById.js';

const usersRouter = Router();

usersRouter.get('/travellers/:travellerId', getTravellerById);

export default usersRouter;
