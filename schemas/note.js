const Joi = require('joi');

const noteSchema = Joi.object({
  id:Joi.number().integer().positive(),
  name: Joi.string().min(1).required(),
  created:Joi.date().default(function () {
            return new Date();
          }),
  category: Joi.string().min(1).required(),
  content: Joi.string().min(1),
  dates:Joi.string().min(1),
  archive:Joi.boolean()
});

module.exports = noteSchema;

// const yup = require('yup');
// const noteSchema = yup.object().shape({
//     id: yup.number().integer().positive(),
//     name: yup.string().required().trim().min(1).max(70),
//     created:yup.date().default(function () {
//         return new Date();
//       }),
//     category: yup.string().required().min(1).max(20),
//     content: yup.string().required().trim().min(1).max(120),
//     dates: yup.string(),
//     archive:yup.boolean()
// });

// module.exports = noteSchema;