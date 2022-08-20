const express = require("express");
const router = express.Router();
const Player = require("../../models/Player");
const Game = require("../../models/Game");



router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (e) {
    res.status(500).json(e.message);
  }
});
router.post("/", async (req, res) => {
   try {
    const players = await Player.find();
    let max = players.length - 2
    let randNum = Math.floor(Math.random() * max) + 1;
    let player1 = players[randNum];
    let player2 = players[randNum + 1];
    const game = new Game({
      status: true,
      players: {player1, player2},
      winner: null,
    });
    const newGame = await game.save()
    res.status(200).json(newGame);
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.put("/", async (req, res) => {
  console.log(req.body);
  try {
    let gameWinner = await Player.findOne({ _id: req.body.winnerId })
    Game.findOneAndUpdate({_id: req.body.gameId}, {status: false, winner: gameWinner}).then(game => {
      res.status(200).json(game);
    })
  
  } catch (e) {
    res.status(400).json(e.message);
  }
});


module.exports = router;