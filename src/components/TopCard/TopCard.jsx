import React from "react";
import Card from "../Card/Card";

function TopCard({ cardInfo, activeCard }) {

  const noCards = !cardInfo || Object.keys(cardInfo).length === 0;

  return (
    <section className="top-card">
      {noCards ? (
        <Card />
      ) : (
      <Card cardInfo={cardInfo} removeButton activeCard={activeCard} /> 
      )}
    </section>
  );
}

export default TopCard;