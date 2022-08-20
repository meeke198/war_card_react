const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const players = require("./routes/api/players");
const game = require("./routes/api/game");


// require('./config/database'); //connect to database errors
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
//connect to MongoDB using Mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));
//for production mode
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// const users = require("./routes/api/users");
//“CORS” stands for Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).
const cors = require("cors"); //enable cors
app.use(cors());

// require("dotenv").config(); //de doc duoc file env bang cach process.env.abc
// const auth = require("./routes/api/auth");
//body request tu front end gui xuong se chay qua cai code nay de parse ve dang json


app.use("/api/game", game);
app.use("/api/players", players);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

//
