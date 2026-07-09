import { login, refreshSession } from './auth/auth.js';
import { getCategories } from './categories/getCategories.js';
import { getRecommendedStories } from './stories/getRecommendedStories.js';
import { getStoryById } from './stories/getStoryById.js';
import {
  getTravellersService,
  getTopTravellersService,
} from './users/getTravellers.js';
import { getMe } from './users/getMe.js';
import { getTravellerById } from './users/getTravellerById.js';
import { addSavedStory } from './savedStories/addSavedStory.js';
import { removeSavedStory } from './savedStories/removeSavedStory.js';
import { checkSavedStory } from './savedStories/checkSavedStory.js';
import { getSavedStories } from './savedStories/getSavedStories.js';

export const auth = {
  login,
  refreshSession,
};

export const categories = {
  getCategories,
};

export const stories = {
  getRecommendedStories,
  getStoryById,
};

export const users = {
  getMe,
  getTravellersService,
  getTopTravellersService,
  getTravellerById,
};

export const savedStories = {
  addSavedStory,
  removeSavedStory,
  checkSavedStory,
  getSavedStories,
};
