import { registerUser } from "./auth/registerUser.js";
import { getPopularStories } from "./stories/getPopularStories.js";

export const auth = {
  registerUser,
};

export const stories = {
  getPopularStories,
};
