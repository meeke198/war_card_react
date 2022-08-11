import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

function Cards(props) {
  const [firstRun, setFirstRun] = useState(true);
  const [suits, setSuits] = useState(["spades", "hearts", "clubs", "diams"]);
  const [cardFaces, setCardFaces] = useState([
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ]);
  const [deck, setDeck] = useState([]);
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [card1, setCard1] = useState([]);
  const [card2, setCard2] = useState([]);
  const [score1, setScore1] = useState(26);
  const [score2, setScore2] = useState(26);
  const [pos, setPos] = useState(0);
  const [battleCards, setBattleCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  let [p1, setP1] = useState(document.querySelector("#player1 .hand"));
  let [p2, setP2] = useState(document.querySelector("#player2 .hand"));
  const restartGame = () => {
    setFirstRun(false);
    createCard();
    //   shuffleCards(deck);
    //   deal(deck);
    //   battle();
    console.log("restart ne");
  };
  const createCard = () => {
    for (let index in suits) {
      let suit = suits[index];
      console.log(suit);
      for (let i in cardFaces) {
        let card = {
          suit,
          face: cardFaces[i],
          cardValue: parseInt(i) + 2,
        };
        setDeck([deck.push(card)]);
      }
    }
    console.log(deck);
  };
  const shuffleCards = () => {
    console.log(deck);
    console.log("in shuffle");
    let j = deck.length - 1;
    let i;
    while (j) {
      i = Math.floor(Math.random() * j--);
      [deck[j], deck[i]] = [deck[i], deck[j]];
    }

    return deck;
  };

  const deal = (deck) => {
    for (let i = 0; i < deck.length; i++) {
      if (i % 2) {
        setPlayer1(player1.push(deck[i]));
      } else {
        setPlayer2(player2.push(deck[i]));
      }
    }
    // console.log({player1}, {player2});
  };

  const battle = () => {
    if (!gameOver) {
      setCard1(player1.shift());
      setCard2(player2.shift());

      setBattleCards([card1, card2]);
      console.log({ battleCards });
      //update html
      p1.innerHTML = showCard(card1, 0);
      p2.innerHTML = showCard(card2, 0);
      checkWinner(card1, card2, battleCards);
      //update winners
      //update scores
    }
  };

  const showCard = (card, pos) => {
    const move = pos * 40;
    const cardColor =
      card.suit === "diams" || card.suit === "hearts" ? "red" : "back";
    const bCard =
      <div className="hand" style={{color: cardColor, marginLeft: move}} >
      `{card.cardValue + " &" + card.suit + ";"}`</div>;
    return bCard;
  };
  const checkWinner = (card1, card2, battleCards) => {
    console.log({ card1 });
    if (card1.cardValue === card2.cardValue) {
      console.log("warBattle");
      warBattle(battleCards);
    } else if (card1.cardValue > card2.cardValue) {
      setPlayer1(player1.concat(battleCards));
      console.log(player1.length);
      console.log(player2.length);
      setScore1(score1 + player1.length);
      setScore2(score2 + player1.length);
    } else if (card2.cardValue > card1.cardValue) {
      setPlayer2(player2.concat(battleCards));
      console.log(player1.length);
      console.log(player2.length);
      setScore1(score1 + player1.length);
      setScore2(score2 + player1.length);
    }
  };

  const warBattle = (battleCards) => {
    const pos = battleCards.length / 2;
    if (isGameOver) {
      console.log("Gameover");
    } else {
      for (let i = 0; i < 3; i++) {
        setCard1(player1.shift());
         setBattleCards(battleCards.concat(card1));
         setPos(pos + i);
      }
      for (let i = 0; i < 3; i++) {
         setCard2(player2.shift());
        setBattleCards(battleCards.concat(card2));
        setPos(pos + i);
      }
      console.log({ battleCards });
    }
    checkWinner(card1, card2, battleCards);
  };
  const isGameOver = () => {
    if (player1.length < 20 || player2.length < 20) {
      setGameOver(true);
      console.log("In game is over");
      if (player1.length < 0) {
        //   message.style.display = "in block";
        setMessage("Player2 won!!!!");
      } else {
        //   message.style.display = "in block";
        setMessage("Player2 won!!!!");
      }
    }
  };

  const startGame = () => {
    if (firstRun) {
      setFirstRun(false);
      createCard();
      shuffleCards(deck);
      deal(deck);
    }
    battle();
    console.log("work ne");
  };

  // console.log("sharedlayout props", props);
  return (
    <>
      <div id="wrapper"></div>
      <div className="message">{message}</div>
      <div id="board">
        <div id="player1" className="players">
          <div className="score" style={{ color: "green" }}>
            Player1's score : {score1}
          </div>
          <div className="hand">{showCard(card1, pos)}</div>
        </div>
        <div id="player2" className="players">
          <div className="score" style={{ color: "green" }}>
            Player2's score: {score2}
          </div>
          <div className="hand">{showCard(card2, pos)}</div>
        </div>
      </div>
      <div className="action">
        <button id="startBtn" type="button" className="btn" onClick={startGame}>
          Fight
        </button>
        <button
          id="startBtn"
          type="button"
          className="btn"
          onClick={restartGame}
        >
          Play again
        </button>
        <p id="message"></p>
      </div>
    </>
  );
}

export default Cards;
