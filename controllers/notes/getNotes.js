const { notesOperations } = require("../../model");

const getNotes = async (req, res, next) => {
    try {
        const notes = await notesOperations.listNotes();
        res.json({
            status: "success",
            code: 200,
            data: {
                result: notes,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = getNotes;