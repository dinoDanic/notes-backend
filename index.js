import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import notesRouter from "./routes/notes.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/notes", notesRouter);

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECTION_URL)
  .then(() => {
    app.listen(process.env.DB_PORT);
    console.log("connected to port", process.env.DB_PORT);
  })
  .catch((err) => console.log(err));
