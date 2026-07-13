import { registerUser } from './auth/registerUser.js';
import { loginController } from './auth/loginController.js';
import { logoutController } from './auth/logoutController.js';
import { refreshController } from './auth/refreshController.js';

import { getCategories } from './categories/getCategories.js';

import { getPopularStories } from './stories/getPopularStories.js';
import { getAllStories } from './stories/getAllStoriesController.js';
import { getRecommendedStories } from './stories/getRecommendedStories.js';
import { getStoryById } from './stories/getStoryById.js';
import { addStory } from './stories/storiesController.js';

import { getMe } from './users/getMe.js';
import { getTravellers } from './users/getTravellers.js';
import { getTopTravellers } from './users/getTravellers.js';
import { getTravellerById } from './users/getTravellerById.js';
import { updatePersonalData } from './users/updatePersonalDataController.js';
import { updateTheme } from './users/updateTheme.js';
import { updateAvatar } from './users/updateAvatar.js';

import { addSavedStoryController } from './savedStories/addSavedStory.js';
import { removeSavedStoryController } from './savedStories/removeSavedStory.js';
import { checkSavedStoryController } from './savedStories/checkSavedStory.js';
import { getSavedStoriesController } from './savedStories/getSavedStories.js';

export const auth = {
  registerUser,
  loginController,
  logoutController,
  refreshController,
};

export const categories = {
  getCategories,
};

export const stories = {
  getPopularStories,
  getAllStories,
  getRecommendedStories,
  getStoryById,
  addStory,
};

export const users = {
  getMe,
  getTravellers,
  getTopTravellers,
  getTravellerById,
  updatePersonalData,
  updateTheme,
  updateAvatar,
};

export const savedStories = {
  addSavedStoryController,
  removeSavedStoryController,
  checkSavedStoryController,
  getSavedStoriesController,
};
