import { Router } from 'express';
import { authenticate } from '../middleware/authenticate.js';
import {
  getTravellers,
  getTopTravellers,
} from '../controllers/users/getTravellers.js';
import { getTravellerById } from '../controllers/users/getTravellerById.js';
import { addSavedStoryValidation } from '../validations/savedStories/addSavedStoryValidation.js';
import { addSavedStoryController } from '../controllers/savedStories/addSavedStory.js';
import { removeSavedStoryController } from '../controllers/savedStories/removeSavedStory.js';
import { checkSavedStoryController } from '../controllers/savedStories/checkSavedStory.js';
import { getSavedStoriesController } from '../controllers/savedStories/getSavedStories.js';

const usersRouter = Router();

usersRouter.get('/travellers/top', getTopTravellers);
usersRouter.get('/travellers', getTravellers);
usersRouter.get('/travellers/:travellerId', getTravellerById);

usersRouter.post(
  '/saved-stories',
  authenticate,
  addSavedStoryValidation,
  addSavedStoryController,
);
usersRouter.delete(
  '/saved-stories/:storyId',
  authenticate,
  removeSavedStoryController,
);
usersRouter.get('/saved-stories', authenticate, getSavedStoriesController);
usersRouter.get(
  '/saved-stories/:storyId',
  authenticate,
  checkSavedStoryController,
);

usersRouter.patch(
  '/me/personal',
  authenticate,
  celebrate(updatePersonalDataSchema),
  ctrl.updatePersonalData,
);

export default usersRouter;
