import React, { useState } from 'react';
import axios from 'axios';
import './CSS/ccard.css'

function CreditCardDetails({ nextPage, prevPage }) {

  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [displayCreditCardNumber, setDisplayCreditCardNumber] = useState('');

  
  const [showCreditCardNumber, setShowCreditCardNumber] = useState(false);

  const handleToggleCreditCardNumberVisibility = () => {
    setShowCreditCardNumber(!showCreditCardNumber);
  };

  const handleCreditCardNumberChange = (event) => {
    setCreditCardNumber(event.target.value);
    setDisplayCreditCardNumber(event.target.value.replace(/.(?=.{3})/g, "*"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form input
    const isCreditCardNumberValid = /^\d{16}$/.test(creditCardNumber);
    const isCardholderNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(cardholderName);
    const isExpirationDateValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate);
    const isCvvValid = /^\d{3,4}$/.test(cvv);
    const isFormValid = isCreditCardNumberValid && isCardholderNameValid && isExpirationDateValid && isCvvValid;
    setIsValid(isFormValid);


    // Submit form data to server
    if (isFormValid) {
      axios.post('/validate-credit-card', {
        creditCardNumber,
        cardholderName,
        expirationDate,
        cvv
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.error(error);
      });
    }
  };

  return (
    <div className='main-con'>
      <h1 className='tag1'>Credit Card Details</h1>
      <p className='tag1'>Enter your credit card information here</p>

      <div className="form-container">
        <div className="form-box">
          <form className='reg-from' onSubmit={handleSubmit}>
            <label htmlFor="credit-card-number">Credit Card Number</label>
           
            <input
          type={showCreditCardNumber ? 'text' : 'password'}
          id="credit-card-number"
          value={creditCardNumber}
          onChange={handleCreditCardNumberChange}
        />
         <button className='showbtn' onClick={handleToggleCreditCardNumberVisibility}>
          {showCreditCardNumber ? 'Hide' : 'Show'}
        </button>



            <label htmlFor="cardholder-name">Cardholder Name</label>
            <input type="text" id="cardholder-name" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />

            <label htmlFor="expiration-date">Expiration Date</label>
            <input type="date" id="expiration-date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />


            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />

            <p>Credit Card Number: {displayCreditCardNumber}</p>

            {/* {isValid ? null : <p>Please fill in all fields correctly.</p>} */}

            <p>Please fill in all fields correctly.</p>
            <button className='submitbtn' type="submit">Submit</button>

          </form>

          <button className='nxtbtn' onClick={nextPage}>Next</button><br/>
          <button className='backbtn1' onClick={prevPage}>Previous</button>

        </div>
      </div>
    </div>
  );
}

export default CreditCardDetails;
