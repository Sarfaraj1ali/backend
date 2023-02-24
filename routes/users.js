const router = require("express").Router();
const {User} = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => { 
 console.log(req.body);
	try{
		var user= new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		});
		console.log(user);
		await user.save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "enternal Server Error" });
	}
});

module.exports = router;
