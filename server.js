import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
const app = express();

import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";

// db
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middleware & error handler
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js"

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome!" });
});
app.get("/api/v1", (req, res) => {
  res.send({ msg: "API" });
});

// routes
app.use("/api/v1/auth", authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
