const express = require("express");
const router = express.Router();
const Player = require("../../models/Player");
// const Game = require("../../models/Game");

router.get("/", async (req, res) => {
  try{
    const players = await Player.find()
    res.status(200).json(players);
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.post("/", async (req, res) => {
   try {
     const userName = await Player.findOne({
       userName: req.body.userName,
     }).exec();

     if (userName) {
       return res.status(400).send({ message: "Username already exists" });
     }
     const player = new Player({
       userName: req.body.userName,
     });
     const newPlayer = await player.save();
     res.status(200).json(newPlayer);
   } catch (e) {
     res.status(500).json(e.message);
   }
});

router.put("/:playerId", async (req, res) => {
  const id = req.params.playerId;
  try {
    let player = await Player.findOne({ _id: id });
    let newScore = player.score + 1;
    player = await Player.updateOne({ _id: id }, {score: newScore}).then(() => {
      res.status(200).json(player);
    })

    // player = await player.update({ score: newScore });
    // player.save();
   
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.delete("/:playerId", async (req, res) => {
   Player.deleteOne({ _id: req.params.playerId })
     .then(() => {
       res.status(200).json({
         message: "Deleted!",
       });
     })
     .catch((error) => {
       res.status(400).json({
         error: error,
       });
     });
});


module.exports = router;