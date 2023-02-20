const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => { 
	try {
		console.log("HELOO")
		// const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
		await new User({ ...req.body}).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
