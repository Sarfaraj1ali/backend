const mongoose = require("mongoose");

module.exports = async (username,password) => {
	const url =`mongodb+srv://${username}:${password}@cluster0.wktjrmw.mongodb.net/?retryWrites=true&w=majority`;
	mongoose.set('strictQuery', false);
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		await mongoose.connect(url,connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
