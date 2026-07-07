import { Joi, Segments } from "celebrate";
import { isValidObjectId } from "mongoose";

export const objectIdValidator = (value, helpers) => {
  return isValidObjectId(value) ? value : helpers.message("Invalid id format");
};

export const createStorySchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(2).max(40).required(),
    category: Joi.string().custom(objectIdValidator).required(),
    article: Joi.string().min(12).max(3000).required(),
  }),
};
