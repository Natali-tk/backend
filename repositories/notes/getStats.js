const listNotes = require("./listNotes");


const getStats = async () => {
  const notes = await listNotes();
  let categoryList = [];
  notes.map((note) => {
    const uniqNote = categoryList.find((n) => n.category === note.category);
    if (uniqNote) {
      note.archive ? uniqNote.archive++ : uniqNote.active++;
    } else {
      categoryList.push({
        category: note.category,
        active: note.archive ? 0 : 1,
        archive: note.archive ? 1 : 0
      });
    }
  });
  return categoryList;
};

module.exports = getStats;


