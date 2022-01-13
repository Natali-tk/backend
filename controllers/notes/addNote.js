const { notesOperations } = require("../../model");
const { noteSchema } = require("../../schemas");
const addNote = async (req, res, next) => {
    try {
        const { error } = noteSchema.validate(req.body);
        if (error) {
            const err = new Error(error.message);
            err.status = 400;
            throw err;
        }
        const result = await notesOperations.addNote(req.body);
        res.status(201).json({
            status: "success",
            code: "201",
            data: {
                result
            }
        });
    } catch (error) {
        next(error);
    }
};

module.exports = addNote;