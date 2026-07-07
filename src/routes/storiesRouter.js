import { Router } from "express";
import { celebrate } from "celebrate";
import { getAllStories } from "../controllers/storiesController.js";
import { getAllStoriesSchema } from "../validations/storiesValidationSchema.js";

const storiesRouter = Router();

storiesRouter.get("/", celebrate(getAllStoriesSchema), getAllStories);

export default storiesRouter;
