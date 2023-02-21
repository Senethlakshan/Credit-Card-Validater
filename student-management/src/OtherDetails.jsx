import React, { useState, useEffect } from "react";
import axios from "axios";

const OtherDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/data").then((response) => {
      setData(response.data);
    });
  }, []);

  const formatCreditCardNumber = (number) => {
    const lastFourDigits = number.slice(-4);
    return `***${lastFourDigits}`;
  };

  return (
  <div>
    <h1>Student Information</h1>
  <h3>Please Check Your Information Correct!</h3>
    <table>
      <thead>
        <tr>
          <th>Full name</th>
          <th>Registration number</th>
          <th>Date of birth</th>
          <th>Age</th>
          <th>Favorite sport</th>
          <th>Credit card number</th>
          <th>Expiry date</th>
          <th>CVV number</th>
          <th>Name of the cardholder</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.fullName}</td>
            <td>{item.registrationNumber}</td>
            <td>{item.dateOfBirth}</td>
            <td>{item.age}</td>
            <td>{item.favoriteSport}</td>
            <td>{formatCreditCardNumber(item.creditCardNumber)}</td>
            <td>{item.expiryDate}</td>
            <td>{item.cvvNumber}</td>
            <td>{item.cardholderName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default OtherDetails;
