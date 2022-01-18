const fs = require("fs").promises;

const listNotes = async () => {
  const data = await fs.readFile("./db/notes.json");
  const notes = JSON.parse(data);
  return notes;
};

module.exports = listNotes;