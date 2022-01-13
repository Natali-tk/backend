const { v4 } = require("uuid");
const listNotes = require("./listNotes");
const updateNotes = require("./updateNotes");

const addNote = async (body) => {
  const notes = await listNotes();
  const newNote = { ...body, id: v4()};
  const newNotes = [...notes, newNote];
  await updateNotes(newNotes);
  return newNote;
};
module.exports = addNote;