const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new mongoose.Schema({
  userName: String,
  score: {type: Number, default: 0},
  cards: { type: Array, default: [] },
});

module.exports = mongoose.model("player", PlayerSchema);
