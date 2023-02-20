require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");

const username = process.env.DB_NAME;
const password = process.env.PASSWORD;
connection(username,password);



app.use(express.json());
app.use(cors());

// routes
app.use("/users", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));