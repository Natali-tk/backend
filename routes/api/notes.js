const express = require("express");
const router = express.Router();
const { notesController } = require("../../services");

router.get("/", notesController.getNotes);

router.get("/:noteId", notesController.getNote);

router.post("/", notesController.addNote);

router.delete("/:noteId", notesController.deleteNote);

router.patch("/:noteId", notesController.updateNote);

router.get("/stats", notesController.getStats);

module.exports = router;