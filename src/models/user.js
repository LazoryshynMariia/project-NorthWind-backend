import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    refreshToken: {
      type: String,
      default: null,
    },

    avatarUrl: {
      type: String,
      default: null,
    },

    articlesAmount: {
      type: Number,
      default: 0,
    },

    savedArticles: [
      {
        type: Schema.Types.ObjectId,
        ref: "articles",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const UserModel = model("user", userSchema);
