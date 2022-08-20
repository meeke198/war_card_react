import React from "react";
import { connect } from "react-redux";

function GameOver() {
  return (
    <div className="modal-background">
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        <div className="game-over">
         <h1>GAME OVER</h1>
         <p className="winner">Winner is</p>
         <p className="winner">Life time winner</p>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
