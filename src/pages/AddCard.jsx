import React, { useState } from "react";
import CardForm from "../components/CardForm/CardForm";
import Card from "../components/Card/Card";

function AddCard() {
        const [cardInfo, setCardInfo] = useState({
        cardNumber: "XXXX XXXX XXXX XXXX",
        cardHolder: "",
        cardValid: "XX/XX",
        cardVendor: ""
    }); 

    const handleCardInfoChange = (info) => {
        setCardInfo(info);
    };

    return (
        <div className="add-card">
            <h1>ADD A NEW BANK CARD</h1>
            <p>NEW CARD</p>
            <Card cardInfo={cardInfo} />
            <CardForm onUpdateCardInfo={handleCardInfoChange} />
        </div>
    );
}

export default AddCard;