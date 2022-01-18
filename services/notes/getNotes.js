const { notesOperations } = require("../../repositories");
const { sendSuccessRes } = require("../../helpers");

const getNotes = async (req, res, next) => {
    try {
        const notes = await notesOperations.listNotes();
        sendSuccessRes(res, { result:notes }, 200);
    } catch (error) {
        next(error);
    }
};

module.exports = getNotes;