import { Schema, model } from 'mongoose';

const savedStorySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    storyId: {
      type: Schema.Types.ObjectId,
      ref: 'Article',
      required: true,
    },
  },
  { timestamps: true },
);

savedStorySchema.index({ userId: 1, storyId: 1 }, { unique: true });

export const SavedStoryModel = model('savedStory', savedStorySchema);
