import { Router } from "express";
import {
  getTravellers,
  getTopTravellers,
} from "../controllers/users/getTravellers.js";
import { getTravellerById } from "../controllers/users/getTravellerById.js";

const usersRouter = Router();

usersRouter.get("/travellers/top", getTopTravellers);
usersRouter.get("/travellers", getTravellers);
usersRouter.get("/travellers/:travellerId", getTravellerById);

export default usersRouter;
