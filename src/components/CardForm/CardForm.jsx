import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCard } from '../../redux/actions';
import './CardForm.scss'

function CardForm({ addCard, onUpdateCardInfo }) {
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [cardValid, setCardValid] = useState("");
    const [selectedItem, setCardVendor] = useState("");
    const navigate = useNavigate();

    const handleCardNumberChange = (e) => {
        const number = e.target.value;
        setCardNumber(number);
        onUpdateCardInfo({ cardNumber: number, cardHolder, cardValid, cardVendor: selectedItem });
    };

    const handleCardHolderChange = (e) => {
        const holder = e.target.value;
        setCardHolder(holder);
        onUpdateCardInfo({ cardNumber, cardHolder: holder, cardValid, cardVendor: selectedItem });
    };

    const handleCardValidChange = (e) => {
        const valid = e.target.value;
        setCardValid(valid);
        onUpdateCardInfo({ cardNumber, cardHolder, cardValid: valid, cardVendor: selectedItem });
    };

    const handleCardVendorChange = (e) => {
        const vendor = e.target.value;
        setCardVendor(vendor);
        onUpdateCardInfo({ cardNumber, cardHolder, cardValid, cardVendor: vendor });
    };

    const handleFormSubmit = () => {
        if (!cardNumber || !cardHolder || !cardValid || !selectedItem) {
            const confirmation = window.confirm("Some fields are empty. Do you want to continue?");
            if (!confirmation) {
                return; 
            }
        }

        const cardInfo = {
            cardNumber,
            cardHolder,
            cardValid,
            cardVendor: selectedItem,
        };
        addCard(cardInfo);
        
        navigate("/");
    };

    return (

<section className="card-form">
    <div>
        <label htmlFor="cardNumber">Card Number</label>
        <input
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
        />
    </div>
    <div>
        <label htmlFor="cardHolder">Cardholder Name</label>
        <input
            type="text"
            placeholder="Firstname Lastname"
            id="cardHolder"
            name="cardHolder"
            value={cardHolder}
            onChange={handleCardHolderChange}
        />
    </div>
    <div className="valid-ccv">
        <div>
            <label htmlFor="cardValid">Valid Thru</label>
            <input
                type="text"
                placeholder="MM/YY"
                id="cardValid"
                name="cardValid"
                value={cardValid}
                onChange={handleCardValidChange}
            />
        </div>
        <div>
            <label htmlFor="ccv">CCV</label>
            <input
                type="text"
                placeholder="XXX"
                id="ccv"
            />
        </div>
    </div>
    <div>
        <label htmlFor="cardVendor">Vendor</label>
        <select
            id="cardType"
            name="cardVendor"
            value={selectedItem}
            onChange={handleCardVendorChange}
        >
            <option value="">Select card type</option>
            <option value="bitcoin">Bitcoin Inc.</option>
            <option value="ninja">Ninja Bank</option>
            <option value="blockchain">Block Chain Inc.</option>
            <option value="evilcorp">Evil Corp</option>
        </select>
    </div>
    <button type="button" onClick={handleFormSubmit}>Submit</button>
</section>
    );
}

export default connect(null, { addCard })(CardForm);