import { Router } from "express";
import { celebrate } from 'celebrate';
import { createStorySchema } from "../validations/articlies/addStoryValidation.js";
import { addStory } from "../controllers/stories/storiesController.js";

const storiesRouter = Router();

storiesRouter.post('/stories', celebrate(createStorySchema, { abortEarly: false }), addStory);

export default storiesRouter;
