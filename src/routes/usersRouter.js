import { Router } from "express";
import {
  getTravellers,
  getTopTravellers,
} from "../controllers/users/getTravellers.js";

const usersRouter = Router();

usersRouter.get("/travellers/top", getTopTravellers);
usersRouter.get("/travellers", getTravellers);

export default usersRouter;
