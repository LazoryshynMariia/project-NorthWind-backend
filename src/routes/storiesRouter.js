import { Router } from "express";
import { celebrate } from "celebrate";
import { createStorySchema } from "../validations/articlies/addStoryValidation.js";
import { addStory } from "../controllers/stories/storiesController.js";
import { upload } from "../middleware/multer.js";

const storiesRouter = Router();

storiesRouter.post(
  "",
    celebrate(createStorySchema, { abortEarly: false }),
   upload.single("img"),
  addStory,
);

export default storiesRouter;
