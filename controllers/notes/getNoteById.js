const { notesOperations } = require("../../model");

const getNote = async (req, res, next) => {
    try {
        const { noteId } = req.params;
        const result = await notesOperations.getNoteById(noteId);
        if (!result) {
            const error = new Error(`Note with id=${noteId} not found`);
            error.status = 404;
            throw error;
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = getNote;