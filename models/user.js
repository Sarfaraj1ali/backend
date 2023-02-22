const mongoose = require("mongoose");

const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { type: String},
	lastName: { type: String},
});


const User = mongoose.model("user", userSchema);

// const validate = (data) => {
// 	const schema = Joi.object({
// 		firstName: Joi.string().required().label("First Name"),
// 		lastName: Joi.string().required().label("Last Name"),
// 	});
// 	return schema.validate(data);
// };

module.exports = {User};
