import { Router } from 'express';
import { celebrate } from 'celebrate';

import { stories as ctrl } from '../controllers/index.js';
import { getAllStoriesSchema } from '../validations/storiesValidationSchema.js';
import { createStorySchema } from '../validations/articlies/addStoryValidation.js';
import { addStory } from '../controllers/stories/storiesController.js';
import { getStoryById } from '../controllers/stories/getStoryById.js';
import { getRecommendedStories } from '../controllers/stories/getRecommendedStories.js';
import { upload } from '../middleware/multer.js';

const storiesRouter = Router();

storiesRouter.get('/recommended', getRecommendedStories);

storiesRouter.get('/:storyId', getStoryById);

storiesRouter.post(
  '',
  celebrate(createStorySchema, { abortEarly: false }),
  upload.single('img'),
  addStory,
);

storiesRouter.get('/', celebrate(getAllStoriesSchema), ctrl.getAllStories);

export default storiesRouter;
