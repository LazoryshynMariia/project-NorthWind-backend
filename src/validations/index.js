import { registerUserSchema } from './auth/registerValidation.js';
import { loginValidation } from './auth/loginValidation.js';
import { refreshValidation } from './auth/refreshValidation.js';
import {
  getAllStoriesSchema,
  storyIdParamSchema,
} from './storiesValidationSchema.js';
import { createStorySchema } from './articlies/addStoryValidation.js';
import {
  addSavedStoryValidation,
  savedStoryParamsValidation,
} from './savedStories/addSavedStoryValidation.js';
import {
  updatePersonalDataSchema,
  travellerIdParamSchema,
} from './updatePersonalDataSchema.js';
import { updateThemeSchema } from './updateThemeSchema.js';

export const auth = {
  registerUserSchema,
  loginValidation,
  refreshValidation,
};

export const stories = {
  getAllStoriesSchema,
  storyIdParamSchema,
  createStorySchema,
};

export const savedStories = {
  addSavedStoryValidation,
  savedStoryParamsValidation,
};

export const users = {
  updatePersonalDataSchema,
  travellerIdParamSchema,
  updateThemeSchema,
};
