const { notesOperations } = require("../../repositories");
const { sendSuccessRes } = require("../../helpers");

const getStats = async (req, res, next) => {
    try {
        const categoryList = await notesOperations.getStats();
        sendSuccessRes(res, { result:categoryList}, 200);
    } catch (error) {
        next(error);
    }
};

module.exports = getStats;