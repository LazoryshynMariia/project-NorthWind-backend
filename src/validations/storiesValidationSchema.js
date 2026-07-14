import { Joi, Segments } from 'celebrate';

export const getAllStoriesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(20).default(10),
    author: Joi.string().hex().length(24),
    category: Joi.string().hex().length(24),
  }),
};

export const storyIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    storyId: Joi.string().hex().length(24).required().messages({
      'string.hex': 'storyId must be a valid MongoDB ObjectId',
      'string.length': 'storyId must be exactly 24 characters',
      'any.required': 'storyId is required',
    }),
  }),
};
