const { notesOperations } = require("../../repositories");
const { noteSchema } = require("../../schemas");
const { sendSuccessRes } = require("../../helpers");
const {BadRequest}=require("http-errors");

const addNote = async (req, res, next) => {
    try {
        const { error } = noteSchema.validate(req.body);
        if (error) {
            throw new BadRequest();
        }
        const result = await notesOperations.addNote(req.body);
        sendSuccessRes(res, { result }, 201);
    } catch (error) {
        next(error);
    }
};

module.exports = addNote;