const { notesOperations } = require("../../model");

const deleteNote = async (req, res, next) => {
    try {
        const { noteId } = req.params;
        const result = await notesOperations.removeNote(noteId);
        if (!result) {
            const error = new Error("Not found");
            error.status = 404;
            throw error;
        }
        res.json({
            status: "success",
            code: 200,
            message: "note deleted"
        })
    } catch (error) {
        next(error);
    }
};
module.exports = deleteNote;