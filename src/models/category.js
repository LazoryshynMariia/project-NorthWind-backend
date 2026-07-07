import { Schema, model } from "mongoose";

const categorySchema = new Schema();

export const CategoryModel = model("Category", categorySchema);
