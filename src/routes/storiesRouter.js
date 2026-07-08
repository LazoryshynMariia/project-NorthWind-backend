import { Router } from "express";
import { celebrate } from "celebrate";

import { createStorySchema } from "../validations/articlies/addStoryValidation.js";
import { addStory } from "../controllers/stories/storiesController.js";
import { getStoryById } from "../controllers/stories/getStoryById.js";
import { getRecommendedStories } from "../controllers/stories/getRecommendedStories.js";
import { upload } from "../middleware/multer.js";

const storiesRouter = Router();

storiesRouter.get("/recommended", getRecommendedStories);

storiesRouter.get("/:storyId", getStoryById);

storiesRouter.post(
  "",
  celebrate(createStorySchema, { abortEarly: false }),
  upload.single("img"),
  addStory,
);

export default storiesRouter;
