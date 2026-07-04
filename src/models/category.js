import { Schema, model } from "mongoose";

const categirySchema = new Schema({});

export const CategoryModel = model('category', categirySchema);