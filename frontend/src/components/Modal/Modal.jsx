// import React from "react";
// // import { closeModal } from "../../actions/modal_actions";
// // import { connect } from "react-redux";
// // import Direction from "./Direction";
// // import GameOver from "./GameOver";

// function Modal() {
//   const suits = ["spades", "hearts", "clubs", "diams"];
//   const cardFaces = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   //  let status = false;

//   const createCard = () => {
//     for (let index in suits) {
//       let suit = suits[index];
//       console.log(suit);
//       for (let i in cardFaces) {
//         let card = {
//           suit,
//           face: cardFaces[i],
//           cardValue: parseInt(i) + 2,
//         };
//         deck.push(card);
//       }
//     }
//     console.log({ deck });
//     return deck;
//   };
//   const shuffleDeck = () => {
//     //  console.log(deck);
//     console.log("in shuffle");
//     let j = deck.length - 1;
//     let i;
//     while (j) {
//       i = Math.floor(Math.random() * j--);
//       [deck[j], deck[i]] = [deck[i], deck[j]];
//     }

//     return cards;
//   };

//   const deal = () => {
//     console.log(cards);
//     for (let i = 0; i < deck.length; i++) {
//       if (i % 2) {
//         deck1.push(deck[i]);
//       } else {
//         deck2.push(deck[i]);
//       }
//     }
//     //  setPlayer1(player1.cards = deck1);
//     //  setPlayer2((player2.cards = deck2));
//     console.log({ deck1 });
//     console.log({ deck2 });
//     console.log("work ne");

//     // console.log({player1}, {player2});
//   };
//     const startGame = () => {
//       setFirstRun(false);
//       createCard();
//       shuffleDeck();
//       deal();
//       const id = setInterval(() => {
//         fight();
//       }, 1000);
//       setIntervalId(id);
//       // fight();
//       //why cant i console.log here
//       console.log({ deck });
//       console.log({ card1 });
//       console.log({ card2 });
//       console.log(player1.cards);
//       console.log(player2.cards);
//     };
//   return (
//     <>
//       <div id="popupStart">
//         <div className="introduction">
//           <h2 id="popup-title">Cat Academy</h2>
//           <p>
//             All cats want to go to App Academy next decade. Start teaching them
//             English from today for their Software Engineer future tomorrow! ^^.
//           </p>
//           <div className="demonstration">
//             <div>
//               <p>Type out a word</p>
//             </div>
//             <div>
//               <p>Hit Enter</p>
//             </div>
//             <div>
//               <p>SWE to-be!!!</p>
//             </div>
//           </div>
//           <button id="start">START GAME</button>
//         </div>
//       </div>

//       <div id="popupEnd">
//         <div className="endGame">
//           <h2 id="popup-title">Cat Academy</h2>
//           <p>
//             Cats have trouble reading Javascript documentation. Give it another
//             try to teach them more words!!!
//           </p>
//           <p id="end-score">
//             Your score: <span id="scoreEnd">0</span>
//           </p>
//           <button id="end">TRY AGAIN</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Modal;
