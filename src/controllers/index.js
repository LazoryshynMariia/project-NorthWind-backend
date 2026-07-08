import { registerUser } from "./auth/registerUser.js";

export const auth = {
  registerUser,
};

export { addSavedStoryController } from "./savedStories/addSavedStory.js";
export { removeSavedStoryController } from "./savedStories/removeSavedStory.js";
export { checkSavedStoryController } from "./savedStories/checkSavedStory.js";
