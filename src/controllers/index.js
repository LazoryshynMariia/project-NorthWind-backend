import { registerUser } from "./auth/registerUser.js";
import { getAllStories } from "./stories/getAllStoriesController.js";
import { updatePersonalData} from "./users/updatePersonalDataController.js";

export const auth = {
  registerUser,
};

export const stories = {
  getAllStories,
};

export const users = {
  updatePersonalData,
};
