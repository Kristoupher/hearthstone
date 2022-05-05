import React from "react";

const Card = ({ card }) => {
  return (
    <div id="container">
      <img
        src={card.img ? card.img : "./img/nocard.png"}
        alt="carte hearthstone"
        id="card-img"
      />
      <div id="info">
        <h3>{card.name}</h3>
        <p>
          <span>Card Set :</span> {card.cardSet}
        </p>
        <p>
          <span>Cost :</span> {card.cost}
        </p>
        <p>
          <span>Player Class :</span> {card.playerClass}
        </p>
        <p>
          <span>Type :</span> {card.type}
        </p>
      </div>
    </div>
  );
};

export default Card;
