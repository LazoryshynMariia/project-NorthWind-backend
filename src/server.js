import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import { errors } from "celebrate";

import { connectMongoDB } from "./db/connectToMongoDB.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";

import authRouter from "./routes/authRouter.js";
import categoriesRouter from "./routes/categoriesRouter.js";
import savedStoriesRouter from "./routes/savedStoriesRouter.js";
import storiesRouter from "./routes/storiesRouter.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/categiries", categoriesRouter);
app.use("/api/stories", storiesRouter);

app.use(errors());

app.use(notFoundHandler);

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
