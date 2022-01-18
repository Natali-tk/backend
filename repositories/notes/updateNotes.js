const fs = require("fs").promises;
const path = require("path");

const notesPath = path.join(__dirname, "../../db/notes.json");
const updateNotes = async (newNotes) => {
  await fs.writeFile(notesPath, JSON.stringify(newNotes));
};

module.exports = updateNotes ;