import { Router } from "express";

// TODO: заменить на реальный authMiddleware от Dev2, когда будет готов
// import { authMiddleware } from "../middleware/authMiddleware.js";
const authMiddleware = (req, res, next) => next();

import { addSavedStoryValidation } from "../validations/savedStories/index.js";
import {
  addSavedStoryController,
  removeSavedStoryController,
  checkSavedStoryController,
} from "../controllers/savedStories/index.js";

const savedStoriesRouter = Router();

savedStoriesRouter.post(
  "/",
  authMiddleware,
  addSavedStoryValidation,
  addSavedStoryController,
);
savedStoriesRouter.delete(
  "/:storyId",
  authMiddleware,
  removeSavedStoryController,
);
savedStoriesRouter.get("/:storyId", authMiddleware, checkSavedStoryController);

export default savedStoriesRouter;
