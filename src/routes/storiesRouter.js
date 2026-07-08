import { Router } from "express";
import { celebrate } from "celebrate";
import { createStorySchema } from "../validations/articlies/addStoryValidation.js";
import { addStory } from "../controllers/stories/storiesController.js";
import { upload } from "../middleware/multer.js";
import { authenticate } from "../middleware/authenticate.js";

const storiesRouter = Router();

storiesRouter.post(
  "",
  authenticate,
  upload.single("img"),
  celebrate(createStorySchema, { abortEarly: false }),
  addStory,
);

export default storiesRouter;
