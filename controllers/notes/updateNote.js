const { notesOperations } = require("../../model");
const { noteSchema } = require("../../schemas");

const updateNote = async (req, res, next) => {
    try {
        const { error } = noteSchema.validate(req.body);
        if (error) {
            const err = new Error("Missing fields");
            err.status = 400;
            throw err;
        }
        const { noteId } = req.params;
        const result = await notesOperations.updateNote(noteId, req.body);
        if (!result) {
            const error = new Error("Not found");
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
module.exports = updateNote;