import { Joi, Segments } from "celebrate";

export const getAllStoriesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(20).default(10),
    author: Joi.string().hex().length(24), // ObjectId автора (ownerId)
  }),
};

//     ТУТ ПО АВТОРУ ФІЛТР
