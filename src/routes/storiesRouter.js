import { Router } from 'express';
import { celebrate } from 'celebrate';

import { stories as ctrl } from '../controllers/index.js';
import { addStory } from '../controllers/stories/storiesController.js';
import { getStoryById } from '../controllers/stories/getStoryById.js';
import { getRecommendedStories } from '../controllers/stories/getRecommendedStories.js';
import { getPopularStories } from '../controllers/stories/getPopularStories.js';

import { upload } from '../middleware/multer.js';

import { getAllStoriesSchema } from '../validations/storiesValidationSchema.js';
import { createStorySchema } from '../validations/articlies/addStoryValidation.js';

const storiesRouter = Router();

storiesRouter.get('/popular', getPopularStories);
storiesRouter.get('/recommended', getRecommendedStories);

storiesRouter.get('/', celebrate(getAllStoriesSchema), ctrl.getAllStories);

storiesRouter.get('/:storyId', getStoryById);

storiesRouter.post(
  '/',
  celebrate(createStorySchema, { abortEarly: false }),
  upload.single('img'),
  addStory,
);

export default storiesRouter;
