import { celebrate, Joi, Segments } from "celebrate";

export const addSavedStoryValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    storyId: Joi.string().hex().length(24).required().messages({
      "string.hex": "storyId must be a valid MongoDB ObjectId",
      "string.length": "storyId must be exactly 24 characters",
      "any.required": "storyId is required",
    }),
  }),
});
