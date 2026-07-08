import { Schema, model } from 'mongoose';

import { hashPassword } from '../utils/hashPassword.js';

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

userSchema.pre('save', async function hashUserPassword(next) {
  if (!this.isModified('password')) {
    next();
    return;
  }

  this.password = await hashPassword(this.password);
  next();
});

export const UserModel = model('user', userSchema);
