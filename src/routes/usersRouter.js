import { Router } from "express";
import {
  getTravellers,
  getTopTravellers,
} from "../controllers/users/getTravellers.js";

const usersRouter = Router();

usersRouter.get("/test", (req, res) => {
  res.json({ message: "users router test works" });
});

usersRouter.get("/travellers/top", getTopTravellers);
usersRouter.get("/travellers", getTravellers);

export default usersRouter;
