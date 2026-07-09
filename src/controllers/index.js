import { registerUser } from './auth/registerUser.js';
import { updateTheme } from './auth/updateTheme.js';
import { loginController } from './auth/loginController.js';

import { getCategories } from './categories/getCategories.js';

export const auth = {
  registerUser,
  updateTheme,
  loginController,
};
import { getPopularStories } from './stories/getPopularStories.js';
import { getAllStories } from './stories/getAllStoriesController.js';
import { updatePersonalData } from './users/updatePersonalDataController.js';
import { getRecommendedStories } from './stories/getRecommendedStories.js';
import { getStoryById } from './stories/getStoryById.js';
import { addStory } from './stories/storiesController.js';

export const categories = {
  getCategories,
};

export { addSavedStoryController } from './savedStories/addSavedStory.js';
export { removeSavedStoryController } from './savedStories/removeSavedStory.js';
export { checkSavedStoryController } from './savedStories/checkSavedStory.js';
export const stories = {
  getPopularStories,
  getAllStories,
  getRecommendedStories,
  getStoryById,
  addStory,
};

export const users = {
  updatePersonalData,
};
