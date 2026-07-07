import { Router } from "express";
import { celebrate } from "celebrate";
import { updatePersonalData } from "../controllers/updatePersonalDataController.js";
import { updatePersonalDataSchema } from "../validations/updatePersonalDataSchema.js";
import { authenticate } from "../middleware/authenticate.js";
import {
  getTravellers,
  getTopTravellers,
} from "../controllers/users/getTravellers.js";

const usersRouter = Router();

usersRouter.get("/travellers/top", getTopTravellers);
usersRouter.get("/travellers", getTravellers);

usersRouter.patch(
  "/me/personal",
  authenticate,
  celebrate(updatePersonalDataSchema),
  updatePersonalData,
);

export default usersRouter;
