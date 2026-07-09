import { Router } from 'express';
import { celebrate } from 'celebrate';

import { stories } from '../controllers/index.js';
import { stories as storiesValidation } from '../validations/index.js';

import { upload } from '../middleware/multer.js';
import { authenticate } from '../middleware/authenticate.js';

const storiesRouter = Router();

storiesRouter.get('/popular', stories.getPopularStories);
storiesRouter.get('/recommended', stories.getRecommendedStories);

storiesRouter.get(
  '/',
  celebrate(storiesValidation.getAllStoriesSchema),
  stories.getAllStories,
);

storiesRouter.get(
  '/:storyId',
  celebrate(storiesValidation.storyIdParamSchema),
  stories.getStoryById,
);

storiesRouter.post(
  '/',
  authenticate,
  upload.single('img'),
  celebrate(storiesValidation.createStorySchema, { abortEarly: false }),
  stories.addStory,
);

export default storiesRouter;
