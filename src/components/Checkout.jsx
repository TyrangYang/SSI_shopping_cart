import React, { useState } from 'react';
import '../css/checkout.css';

export default function Checkout({ setShowCheckout }) {
    const [cardDisplayOption, setCardDisplayOption] = useState({
        formDisplay: true,
        payPalDisplay: false,
        bankAccountDisplay: false,
    });

    const handleSwitchButtonClick = (e) => {
        if (e.target.id === 'card1') {
            setCardDisplayOption({
                formDisplay: true,
                payPalDisplay: false,
                bankAccountDisplay: false,
            });
            return;
        }

        if (e.target.id === 'card2') {
            setCardDisplayOption({
                formDisplay: false,
                payPalDisplay: true,
                bankAccountDisplay: false,
            });
            return;
        }

        if (e.target.id === 'card3') {
            setCardDisplayOption({
                formDisplay: false,
                payPalDisplay: false,
                bankAccountDisplay: true,
            });
            return;
        }
    };

    return (
        <div
            className="checkoutCardContainer"
            onClick={(e) => {
                if (e.target.className === 'checkoutCardContainer')
                    setShowCheckout(false);
            }}
        >
            <div className="checkoutCard">
                <h1>checkout</h1>

                <ul>
                    <li
                        className={
                            cardDisplayOption.formDisplay ? 'btn1' : 'btn2'
                        }
                        onClick={handleSwitchButtonClick}
                        id="card1"
                    >
                        Credit Card
                    </li>
                    <li
                        className={
                            cardDisplayOption.payPalDisplay ? 'btn1' : 'btn2'
                        }
                        onClick={handleSwitchButtonClick}
                        id="card2"
                    >
                        PayPal
                    </li>
                    <li
                        className={
                            cardDisplayOption.bankAccountDisplay
                                ? 'btn1'
                                : 'btn2'
                        }
                        onClick={handleSwitchButtonClick}
                        id="card3"
                    >
                        Bank Transfer
                    </li>
                </ul>

                <div
                    className="creditCardFormContainer"
                    style={{
                        display: cardDisplayOption.formDisplay
                            ? 'flex'
                            : 'none',
                    }}
                >
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log(e);
                        }}
                    >
                        <div className="inputGroup">
                            <label htmlFor="creditCard-name">Full Name:</label>
                            <input
                                type="text"
                                placeholder="Enter FullName"
                                name="creditCard-name"
                                id="creditCard-name"
                            />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="creditCard-card-num">
                                Card number:
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter A Card Number"
                                name="creditCard-card-num"
                                id="creditCard-card-num"
                                minLength="16"
                                maxLength="16"
                                onChange={(e) => {
                                    // add a space between every four digit
                                    e.target.value = e.target.value
                                        .replace(/\W/gi, '')
                                        .replace(/(.{4})/g, '$1 ')
                                        .trim();
                                }}
                                required
                            />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="creditCard-month">
                                Expiration:
                            </label>
                            <input
                                type="tel"
                                placeholder="MM"
                                id="creditCard-month"
                                minLength="2"
                                maxLength="2"
                                pattern="0[1-9]|1[0,1,2]"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="YY"
                                id="creditCard-year"
                                minLength="2"
                                maxLength="2"
                                pattern="[0-9][0-9]"
                                required
                            />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="creditCard-CCV">CCV:</label>
                            <input
                                type="tel"
                                placeholder="CCV"
                                name="creditCard-CCV"
                                id="creditCard-CCV"
                                minLength="3"
                                maxLength="3"
                                pattern="\d{3}"
                                required
                            />
                        </div>

                        <div className="inputGroup">
                            <input
                                type="checkbox"
                                name="creditCard-Agree"
                                id="Agree"
                                required
                            />
                            <label htmlFor="Agree">
                                Agreed to terms and conditions
                            </label>
                        </div>

                        <button className="btn1">Submit</button>
                    </form>
                </div>

                <div
                    className="payPalContainer"
                    style={{
                        display: cardDisplayOption.payPalDisplay
                            ? 'block'
                            : 'none',
                    }}
                >
                    <p>PayPal is the easiest way to pay online</p>
                    <button>Login my PayPal</button>
                    <p>Note:Here are some notes</p>
                </div>

                <div
                    className="bankAccountDetailContainer"
                    style={{
                        display: cardDisplayOption.bankAccountDisplay
                            ? 'block'
                            : 'none',
                    }}
                >
                    <h2>Bank account Detail</h2>
                    <h3>Bank:</h3>
                    <p>The World Bank</p>
                    <h3>Account Number:</h3>
                    <p>123123123</p>
                    <h3>IBAN:</h3>
                    <p>132132132</p>
                    <h3>Note:</h3>
                    <p>Here are some notes.</p>
                </div>
            </div>
        </div>
    );
}
