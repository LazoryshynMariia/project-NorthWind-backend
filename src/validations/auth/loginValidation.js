import { Joi, Segments, celebrate } from 'celebrate';

export const loginValidation = celebrate({
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),

    password: Joi.string().min(8).max(128).required(),
  }),
});