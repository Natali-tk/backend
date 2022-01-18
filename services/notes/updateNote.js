const { notesOperations } = require("../../repositories");
const { noteSchema } = require("../../schemas");
const { sendSuccessRes } = require("../../helpers");
const {BadRequest, NotFound}=require("http-errors");

const updateNote = async (req, res, next) => {
    try {
        const { error } = noteSchema.validate(req.body);
        if (error) {
            throw new BadRequest("Missing fields");
        }
        const { noteId } = req.params;
        const result = await notesOperations.updateNote(noteId, req.body);
        if (!result) {
            throw new NotFound( `Note with id=${noteId} not found`);
        }
        sendSuccessRes(res, { result }, 200);

    } catch (error) {
        next(error);
    }
};
module.exports = updateNote;