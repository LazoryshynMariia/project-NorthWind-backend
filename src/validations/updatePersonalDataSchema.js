import { Joi, Segments } from "celebrate";

export const updatePersonalDataSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().trim().max(32).required(),
  }),
};
