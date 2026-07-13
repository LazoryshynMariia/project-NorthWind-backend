import { Router } from 'express';
import { celebrate } from 'celebrate';
import { upload } from '../middleware/multer.js';

import { authenticate } from '../middleware/authenticate.js';
import { savedStories, users } from '../controllers/index.js';
import {
  savedStories as savedStoriesValidation,
  users as usersValidation,
} from '../validations/index.js';

const usersRouter = Router();

usersRouter.get('/me', authenticate, users.getMe);

usersRouter.get('/travellers/top', users.getTopTravellers);
usersRouter.get(
  '/travellers',
  celebrate(usersValidation.getTravellersQuerySchema),
  users.getTravellers,
);
usersRouter.get(
  '/travellers/:travellerId',
  celebrate(usersValidation.travellerIdParamSchema),
  users.getTravellerById,
);

usersRouter.post(
  '/saved-stories',
  authenticate,
  savedStoriesValidation.addSavedStoryValidation,
  savedStories.addSavedStoryController,
);
usersRouter.delete(
  '/saved-stories/:storyId',
  authenticate,
  savedStoriesValidation.savedStoryParamsValidation,
  savedStories.removeSavedStoryController,
);
usersRouter.get(
  '/saved-stories',
  authenticate,
  savedStories.getSavedStoriesController,
);
usersRouter.get(
  '/saved-stories/:storyId',
  authenticate,
  savedStoriesValidation.savedStoryParamsValidation,
  savedStories.checkSavedStoryController,
);

usersRouter.patch(
  '/me/personal',
  authenticate,
  upload.single('avatar'),
  celebrate(usersValidation.updatePersonalDataSchema),
  users.updatePersonalData,
);

usersRouter.patch(
  '/me/theme',
  authenticate,
  celebrate(usersValidation.updateThemeSchema),
  users.updateTheme,
);

export default usersRouter;
