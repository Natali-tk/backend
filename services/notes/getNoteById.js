const { notesOperations } = require("../../repositories");
const { sendSuccessRes } = require("../../helpers");
const {NotFound}=require("http-errors");

const getNote = async (req, res, next) => {
    try {
        const { noteId } = req.params;
        const result = await notesOperations.getNoteById(noteId);
        if (!result) {
            throw new NotFound(`Note with id=${noteId} not found`); 
        }
        sendSuccessRes(res, { result }, 200);
    } catch (error) {
        next(error);
    }
};

module.exports = getNote;