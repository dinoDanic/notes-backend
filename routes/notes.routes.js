import express from "express";
import {
  createNote,
  getNotes,
  deleteNote,
} from "../controllers/notes.controllers.js";

const router = express.Router();

router.post("/", createNote);
router.get("/", getNotes);
router.delete("/:id", deleteNote);

export default router;
