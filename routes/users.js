const router = require("express").Router();
const { User} = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => { 
	// try {
		console.log("HELOO")
		// const { error } = validate(req.body);
		// if (error)
		// 	return res.status(400).send({ message: error.details[0].message });
		await new User({ ...req.body}).save();
		res.status(201).send({ message: "User created successfully" });
	// } catch (error) {
	// 	await new User({ ...req.body}).save();
	// 	res.status(200).send({ message: "User created" });
	// }
});

module.exports = router;
