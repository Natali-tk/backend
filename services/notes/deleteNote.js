const { notesOperations } = require("../../repositories");
const { sendSuccessRes } = require("../../helpers");
const {NotFound}=require("http-errors");

const deleteNote = async (req, res, next) => {
    try {
        const { noteId } = req.params;
        const result = await notesOperations.removeNote(noteId);
        if (!result) {
            throw new NotFound( `Note with id=${noteId} not found`);
        }
        sendSuccessRes(res, { message: "Success delete" });
    } catch (error) {
        next(error);
    }
};
module.exports = deleteNote;