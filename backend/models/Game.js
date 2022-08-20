const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new mongoose.Schema({
  status: { type: Boolean, default: false },
  players: { type: Object, default: {} },
  winner: { type: Object, default: null },
});

module.exports = mongoose.model("game", GameSchema);
