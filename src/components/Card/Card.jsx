import './Card.scss'
import React from 'react';
import { useDispatch } from "react-redux";
import { removeCard } from "../../redux/actions"

function Card({ cardInfo, onClick, activeCard, removeButton }) {

    const emptyCard = {
            cardNumber: "XXXX XXXX XXXX XXXX",
            cardHolder: "",
            cardValid: "XX/XX",
            cardVendor: ""
    };

    if (!cardInfo) {
        return <Card cardInfo={emptyCard} removeButton={false} />;
    }

    const dispatch = useDispatch();
    const cardClass = `card ${cardInfo.cardVendor}`;

    const handleRemoveCard = () => {
        const confirmation = window.confirm("Are you sure you want to delete the card?");
        if (!confirmation) {
            return; 
        }
        dispatch(removeCard(activeCard));
    };
    

    return (
        <>
            <section className={cardClass} onClick={onClick}>
                <article className='card__top-info'>
                    <div className='chip' />
                    <div className='vendor-logo' />
                </article>
                <h2 className='card-number'>{ cardInfo.cardNumber }</h2>
                <article className="card__lower-info">
                    <h4>CARDHOLDER NAME</h4>
                    <h4 className='align-right'>VALID THRU</h4>
                    <h3>{ cardInfo.cardHolder }</h3>
                    <h3 className='align-right'>{ cardInfo.cardValid }</h3>
                </article>
            {removeButton && (<button id='removeButton' onClick={handleRemoveCard} className='remove-button'>DELETE ACTIVE CARD</button>)}
            </section>
        </>
    );
}

export default Card;