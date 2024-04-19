import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from "../Card/Card";
import "./CardStack.scss";
import { toggleActiveCard } from '../../redux/actions';

function CardStack({ cards }) {
  const activeCard = useSelector(state => state.activeCard);
  const dispatch = useDispatch();

  useEffect(() => {
  }, []); 

  const handleCardClick = (card) => {
    dispatch(toggleActiveCard(card.cardNumber));
  };

  return (
<section className="card-stack">
  {cards.length > 0 ? (
    [...cards.slice(1), cards[0]].map((card, index) => (
      <Card
        key={index}
        cardInfo={card}
        onClick={() => handleCardClick(card)}
        isActive={card.cardNumber === activeCard}
      />
    ))
  ) : (
    ""
  )}
</section>
  );
}

export default CardStack;