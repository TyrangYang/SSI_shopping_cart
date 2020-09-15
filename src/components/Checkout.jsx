import React, { useState } from 'react';
import '../css/checkout.css';

import {
    Container,
    Button,
    TextField,
    FormGroup,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core';

export default function Checkout({ setShowCheckout }) {
    const [formDisplay, setFormDisplay] = useState(true);
    const [payPalDisplay, setPayPalDisplay] = useState(false);
    const [bankAccountDisplay, setBankAccountDisplay] = useState(false);
    return (
        <div
            className="checkoutCardContainer"
            onClick={(e) => {
                if (e.target.className === 'checkoutCardContainer')
                    setShowCheckout(false);
            }}
        >
            <Container maxWidth="sm" className="checkoutCard">
                <h1>CHECKOUT</h1>

                <ul>
                    <li>
                        <Button
                            variant={formDisplay ? 'contained' : 'outlined'}
                            color="primary"
                            onClick={() => {
                                setFormDisplay(true);
                                setPayPalDisplay(false);
                                setBankAccountDisplay(false);
                            }}
                            fullWidth
                        >
                            Credit Card
                        </Button>
                    </li>
                    <li>
                        <Button
                            variant={payPalDisplay ? 'contained' : 'outlined'}
                            color="primary"
                            onClick={() => {
                                setFormDisplay(false);
                                setPayPalDisplay(true);
                                setBankAccountDisplay(false);
                            }}
                            fullWidth
                        >
                            PayPal
                        </Button>
                    </li>
                    <li>
                        <Button
                            variant={
                                bankAccountDisplay ? 'contained' : 'outlined'
                            }
                            color="primary"
                            onClick={() => {
                                setFormDisplay(false);
                                setPayPalDisplay(false);
                                setBankAccountDisplay(true);
                            }}
                            fullWidth
                        >
                            Bank Transfer
                        </Button>
                    </li>
                </ul>

                <div
                    className="creditCardFormContainer"
                    style={{
                        display: formDisplay ? 'flex' : 'none',
                    }}
                >
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.dir(e.target);
                        }}
                    >
                        <TextField
                            id="creditCard-name"
                            name="creditCard-name"
                            placeholder="Enter FullName"
                            label="Null Name:"
                            required
                        />
                        <TextField
                            id="creditCard-card-num"
                            name="creditCard-card-num"
                            placeholder="Enter A Card Number"
                            type="tel"
                            label="Card number:"
                            onChange={(e) => {
                                // add a space between every four digit
                                e.target.value = e.target.value
                                    .replace(/\W/gi, '')
                                    .replace(/(.{4})/g, '$1 ')
                                    .trim();
                            }}
                            inputProps={{
                                minLength: 19,
                                maxLength: 19,
                            }}
                            required
                        />

                        <FormGroup row>
                            <TextField
                                id="creditCard-month"
                                name="creditCard-month"
                                placeholder="MM"
                                type="tel"
                                inputProps={{
                                    minLength: 2,
                                    maxLength: 2,
                                    pattern: '0[1-9]|1[0,1,2]',
                                }}
                                label="Month"
                                required
                            />
                            <TextField
                                id="creditCard-year"
                                name="creditCard-year"
                                placeholder="YY"
                                type="tel"
                                inputProps={{
                                    minLength: 2,
                                    maxLength: 2,
                                    pattern: '[0-9][0-9]',
                                }}
                                label="Year"
                                required
                            />
                        </FormGroup>

                        <TextField
                            id="creditCard-CCV"
                            name="creditCard-CCV"
                            placeholder="CCV"
                            type="tel"
                            label="CCV:"
                            inputProps={{
                                minLength: 3,
                                maxLength: 3,
                                pattern: '\\d{3}',
                            }}
                            required
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="creditCard-Agree"
                                    id="Agree"
                                    required
                                />
                            }
                            label="Agreed to terms and conditions"
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Submit
                        </Button>
                    </form>
                </div>

                <div
                    className="payPalContainer"
                    style={{
                        display: payPalDisplay ? 'block' : 'none',
                    }}
                >
                    <p>PayPal is the easiest way to pay online</p>
                    <button>Login my PayPal</button>
                    <p>Note:Here are some notes</p>
                </div>

                <div
                    className="bankAccountDetailContainer"
                    style={{
                        display: bankAccountDisplay ? 'block' : 'none',
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
            </Container>
        </div>
    );
}
