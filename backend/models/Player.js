const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    playername: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
  },
  { timestamps: true },
  { collection: "players" }
);

module.exports = mongoose.model("player", PlayerSchema);
