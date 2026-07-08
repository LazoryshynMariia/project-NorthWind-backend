import { Joi, Segments } from "celebrate";

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().max(32).required(),
    email: Joi.string().max(64).email().required(),
    password: Joi.string().min(8).max(128).required(),
  }),
};