import merge from "lodash/merge";
import axios from "axios";
import "./cards.css"
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
let cards = [];
let deck1 = [];
let deck2 = [];
let card1 = [];
let card2 = [];
// let lifeTimeScore = 0;
// let score1 = deck1.length;
// let score2 = deck2.length;
let deck = [];
let lastWinner = "";
let lastWinCard = {};
let finalWinner = {};
function Cards(props) {
  let [firstRun, setFirstRun] = useState(true);
  let [player1, setPlayer1] = useState([]);
  let [player2, setPlayer2] = useState([]);
  let [score1, setScore1] = useState(26);
  let [score2, setScore2] = useState(26);
  let [lifeTimeScore, setLifeTimeScore] = useState(0);
  // let [pos, setPos] = useState(0);
  let [battleCards, setBattleCards] = useState([]);
  let [gameOver, setGameOver] = useState(false);
  let [message, setMessage] = useState("");
  let [intervalId, setIntervalId] = useState(null);
  //why it calls everytime something? change
  useEffect(() => {
    if (gameOver) {
      isGameOver();
      clearInterval(intervalId);
    } else {
      axios.post(`http://localhost:5000/api/game/`).then((newGame) => {
        const players = newGame.data.players;
        console.log({ players });
        setPlayer1(players.player1);
        setPlayer2(players.player2);
      });
    }
  }, [gameOver]);

  const suits = ["spades", "hearts", "clubs", "diams"];
  const cardFaces = [
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
  ];
  //  let status = false;

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
        deck.push(card);
      }
    }
    console.log({ deck });
    return deck;
  };
  const shuffleDeck = () => {
    //  console.log(deck);
    console.log("in shuffle");
    let j = deck.length - 1;
    let i;
    while (j) {
      i = Math.floor(Math.random() * j--);
      [deck[j], deck[i]] = [deck[i], deck[j]];
    }

    return cards;
  };

  const deal = () => {
    console.log(cards);
    for (let i = 0; i < deck.length; i++) {
      if (i % 2) {
        deck1.push(deck[i]);
      } else {
        deck2.push(deck[i]);
      }
    }
    //  setPlayer1(player1.cards = deck1);
    //  setPlayer2((player2.cards = deck2));
    console.log({ deck1 });
    console.log({ deck2 });
    console.log("work ne");

    // console.log({player1}, {player2});
  };
  // const handleOnBlurFight = () => {
  //   if(gameOver === true){
  //     setMessage("Game is over")
  //   } else {
  //     setMessage("");
  //   }
  // };

  const showCard = (card, pos) => {
    const move = pos * 40;
    const cardColor =
      card.suit === "diams" || card.suit === "hearts" ? "red" : "back";
    const bCard = (
      <div className="hand" style={{ color: cardColor, marginLeft: move }}>
        `{card.cardValue + " &" + card.suit + ";"}`
      </div>
    );
    return bCard;
  };

  const fight = () => {
    if (!gameOver) {
      card1 = deck1.shift();
      card2 = deck2.shift();
      //  let hand1 = merge(player1.cards);
      //  let hand2 = merge(player2.cards);
      // setCard1(hand1.shift())
      // setCard2(hand2.shift())
      setBattleCards(card1, card2);
      console.log({ battleCards });
      //update html
      checkWinner(card1, card2, battleCards);
      //update winners
      //update scores
      // setPlayer1(player1.cards = hand1);
      // setPlayer2((player1.cards = hand2));
    }
  };

  const checkWinner = (card1, card2, battleCards) => {
    if (card1.cardValue === card2.cardValue) {
      console.log("warBattle");
      warBattle(battleCards);
    } else if (card1.cardValue > card2.cardValue) {
      deck1 = deck1.concat(battleCards);
      setScore1(deck1.length);
      setScore2(deck2.length);
      lastWinner = player1.userName;
      lastWinCard = card1;
      // console.log(player1.length);
      // console.log(player2.length);
      // setScore1(score1 + player1.length);
      // setScore2(score2 + player1.length);
    } else if (card2.cardValue > card1.cardValue) {
      deck2 = deck2.concat(battleCards);
      setScore2(deck2.length);
      setScore1(deck1.length);
      lastWinner = player2.userName;
      lastWinCard = card2;
      // console.log(player1.length);
      // console.log(player2.length);
      // setScore1(score1 + player1.length);
      // setScore2(score2 + player1.length);
    }
    console.log({ lastWinner });
    console.log({ lastWinCard });
  };

  const warBattle = (battleCards) => {
    // const pos = battleCards.length / 2;
    let warBattleCards = merge([], battleCards);
    if (deck1.length < 3 || deck2.length < 3) {
      endGame();
    } else {
      for (let i = 0; i < 3; i++) {
        card1 = deck1.shift();
        warBattleCards.concat(card1);
        // setPos(pos + i);
      }

      for (let i = 0; i < 3; i++) {
        card2 = deck2.shift();
        warBattleCards.concat(card2);
        // setPos(pos + i);
        // setBattleCards(warBattleCards);
      }
      setBattleCards(warBattleCards);
      console.log({ battleCards });
    }
    checkWinner(card1, card2, warBattleCards);
  };
  const isGameOver = () => {
    endGame();
    if (score2 <= 2) {
      setWinner(player2);
      setMessage(`Player2 won!!!! Lifetime won is ${lifeTimeScore}`);
    } else {
      setWinner(player1);
      setMessage(`Player1 won!!!! Lifetime won is ${lifeTimeScore}`);
    }
    clearInterval(intervalId);
    setGameOver(true);

    // axios.put(`{http://localhost:5000/api/game/${player.id}}`)
    //  .then(player => {
    //   setLifeTimeScore(player.data.score);
    // }
  };
  const checkGame = () => {
    if (deck1.length < 3 || deck2.length < 3) {
      clearInterval(intervalId);
      endGame();
      setWinner();
    } else {
      const id = setInterval(() => {
        fight();
      }, 1000);
      setIntervalId(id);
    }
  };
  const endGame = () => {
    let popupEnd = document.getElementById("popupEnd");
    popupEnd.style.display = "flex"; //flex to center both side
    let scores = document.getElementById("scoreEnd");
    scores.innerHTML = this.score; //this.score = updated scores in constructor
    let tryagainButton = document.getElementById("end");
    tryagainButton.addEventListener("click", function (event) {
      popupEnd.style.display = "none"; //hide popup
      startGame();
    });
  };
  const setWinner = () => {
    let winnerId = deck1.length < 3 ? player2.id : player1.id;
    finalWinner = axios
      .put(`{http://localhost:5000/api/players/${winnerId}}`)
      .then((player) => {
        setLifeTimeScore(player.data.score);
      });
    console.log({ finalWinner });
  };
  const startGame = () => {
    setFirstRun(false);
    createCard();
    shuffleDeck();
    deal();
    checkGame();
  let popupStart = document.getElementById("popupStart");
        popupStart.addEventListener("click", function (event) {
      popupStart.style.display = "none";
        })
    // fight();
    //why cant i console.log here
    // console.log({ deck });
    // console.log({ card1 });
    // console.log({ card2 });
    // console.log(player1.cards);
    // console.log(player2.cards);
  };

  // console.log("sharedlayout props", props);
  return (
    <>
      <div id="wrapper"></div>
      <div className="message">{message}</div>
      <div id="board">
        <div id="lastWinner" className="lastWinner">
          <p className="winner" style={{ color: "green" }}>
            Last Winner : <span>{lastWinner}</span>
          </p>
          <div className="winCard" style={{ color: "green" }}>
            Last Win Card : <span>{showCard(lastWinCard, 0)}</span>
          </div>
          {/* <div className="hand">{showCard(card1, pos)}</div> */}
        </div>
        <div id="player1" className="players">
          <div className="score" style={{ color: "green" }}>
            {player1?.userName} score : {score1}
          </div>
          <div className="hand">{showCard(card1, 0)}</div>
        </div>
        <div id="player2" className="players">
          <div className="score" style={{ color: "green" }}>
            {player2?.userName}'s score: {score2}
          </div>
          <div className="hand">{showCard(card2, 0)}</div>
        </div>
      </div>
      <div className="action">
        <button
          className={`${
            gameOver ? "bg-indigo-700" : "bg-gray-300 pointer-events-none"
          }`}
          id="FightBtn"
          type="button"
          // onBlur={handleBlurFight}
          onClick={fight}
        >
          Fight
        </button>
        <button id="PlayAgainBtn" type="button" className="btn">
          Play again
        </button>
        {/* <button id="startBtn" type="button">
          Start Game
        </button> */}

        <div id="popupStart">
          <div className="introduction">
            <h2 id="popup-title">Card War</h2>
            <div className="demonstration">
              <div>
                <h2>THE DEAL</h2>
                <h3>The goal is to be the first player to win all 52 cards</h3>
                <h3>
                  The deck is divided evenly, with each player receiving 26
                  cards
                </h3>
                <h2>THE PLAY</h2>
                <h3>
                  Each player turns up a card at the same time and the player
                  with the higher card takes both cards. If the cards are the
                  same rank, it is War.
                </h3>
                <h2>HOW TO KEEP SCORE</h2>
                <h3>The game ends when one player has won all the cards.</h3>
                <button
                  id="start"
                  onClick={startGame}
                 
                >
                  START GAME
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div id="popupEnd">
          <div className="endGame">
            <h2 id="popup-title">Congrattttt {lastWinner.userName}</h2>
            <p id="end-score">
              Your life time score:{" "}
              <span id="scoreEnd">{lastWinner.score}</span>
            </p>
            <button id="end">PLAY AGAIN</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
