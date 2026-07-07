import { Router } from "express";
import { auth as ctrl } from "../controllers/index.js";
import { celebrate } from "celebrate";
import { registerUserSchema } from "../validations/authValidation.js";

const authRouter = Router();

authRouter.post("/register", celebrate(registerUserSchema), ctrl.registerUser);

export default authRouter;
