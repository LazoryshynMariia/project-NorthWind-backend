import { Joi, Segments } from 'celebrate';

export const updatePersonalDataSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().trim().max(32).required(),
  }),
};

export const travellerIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    travellerId: Joi.string().hex().length(24).required().messages({
      'string.hex': 'travellerId must be a valid MongoDB ObjectId',
      'string.length': 'travellerId must be exactly 24 characters',
      'any.required': 'travellerId is required',
    }),
  }),
};
