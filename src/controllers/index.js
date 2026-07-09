import { registerUser } from "./auth/registerUser.js";
import { updateTheme } from "./auth/updateTheme.js";
import { loginController } from "./auth/loginController.js";
import { getPopularStories } from "./stories/getPopularStories.js";
import { getAllStories } from "./stories/getAllStoriesController.js";
import { updatePersonalData} from "./users/updatePersonalDataController.js";

export const auth = {
  registerUser,
  updateTheme,
  loginController
};


export { addSavedStoryController } from "./savedStories/addSavedStory.js";
export { removeSavedStoryController } from "./savedStories/removeSavedStory.js";
export { checkSavedStoryController } from "./savedStories/checkSavedStory.js";
export const stories = {
  getPopularStories,
  getAllStories,
};

export const users = {
  updatePersonalData,
};
