import { Router } from "express";
import { celebrate } from "celebrate";
import { createStorySchema } from "../validations/articlies/addStoryValidation.js";
import { addStory } from "../controllers/stories/storiesController.js";
import { upload } from "../middleware/multer.js";
import { authenticate } from "../middleware/authenticate.js";
import { stories as ctrl } from "../controllers/index.js";
import { getAllStoriesSchema } from "../validations/storiesValidationSchema.js";
import { getStoryById } from "../controllers/stories/getStoryById.js";
import { getRecommendedStories } from "../controllers/stories/getRecommendedStories.js";
import { getPopularStories } from "../controllers/stories/getPopularStories.js";

const storiesRouter = Router();

storiesRouter.get('/recommended', getRecommendedStories);
storiesRouter.get('/:storyId', getStoryById);
storiesRouter.get("/popular", getPopularStories);
storiesRouter.post(
  "",
  authenticate,
  upload.single("img"),
  celebrate(createStorySchema, { abortEarly: false }),
  addStory,
);
storiesRouter.get('/', celebrate(getAllStoriesSchema), ctrl.getAllStories);

export default storiesRouter;
