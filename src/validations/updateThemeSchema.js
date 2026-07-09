import { Joi, Segments } from "celebrate";


export const updateThemeSchema = {
  [Segments.BODY]: Joi.object({
    theme: Joi.string().valid("light", "dark").required(),
  }),
};