import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardStack from "../components/CardStack/CardStack";
import TopCard from "../components/TopCard/TopCard";
import './Home.scss'

function Home() {
  const activeCard = useSelector(state => state.activeCard);
  const savedCards = useSelector(state => state.cards);
  const topCard = savedCards.find(card => card.cardNumber === activeCard);
  const otherCards = savedCards.filter(card => card.cardNumber !== activeCard);

  return (
    <section className="wallet-section">
      <h1>E-WALLET</h1>
      <p>ACTIVE CARD</p>
      <TopCard cardInfo={topCard} activeCard={activeCard} />
      <CardStack cards={otherCards} />
      <Link to="/add-card"><button className="add-button">ADD A NEW CARD</button></Link>
    </section>
  );
}

export default Home;