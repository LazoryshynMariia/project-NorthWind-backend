import { Joi, Segments, celebrate } from 'celebrate';

export const refreshValidation = celebrate({
  [Segments.BODY]: Joi.object({
    refreshToken: Joi.string().required(),
  }),
});