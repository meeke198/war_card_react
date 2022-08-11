const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const db_url = "mongodb://localhost:27017/war_card";

// require('./config/database'); //connect to database errors
//connect to MongoDB using Mongoose
mongoose
  .connect(db_url, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// const users = require("./routes/api/users");
//“CORS” stands for Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).
const cors = require("cors"); //enable cors
app.use(cors());

// require("dotenv").config(); //de doc duoc file env bang cach process.env.abc

// const auth = require("./routes/api/auth");
//body request tu front end gui xuong se chay qua cai code nay de parse ve dang json
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use("/api/auth", auth);
// app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

//
