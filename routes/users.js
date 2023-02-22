const router = require("express").Router();
const { User} = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => { 
	const {firstname,lastname}=req.body
	const user=new User({
		firstname,
		lastname
	})
	try {
		console.log(req.body)
		// const { error } = validate(req.body);
		// if (error)
		// 	return res.status(400).send({ message: error.details[0].message });
		await user.save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "enternal Server Error" });
	}
});

module.exports = router;
