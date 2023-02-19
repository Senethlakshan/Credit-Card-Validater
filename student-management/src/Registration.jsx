import React, { useState } from "react";
import axios from "axios";
import "./CSS/Regis.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Registration({ nextPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [favoriteGame, setFavoriteGame] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const usernameRegex = /^[a-zA-Z0-9_-]{5,20}$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{6,20}$/;
    const registrationNumberRegex = /^[0-9]{5}$/;
    const favoriteGameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) {
      alert("Please enter a valid name.");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
    } else if (!usernameRegex.test(username)) {
      alert(
        "Please enter a valid username (5-20 characters, alphanumeric or _, -)."
      );
    } else if (!passwordRegex.test(password)) {
      alert(
        "Please enter a valid password (6-20 characters, alphanumeric or !@#$%^&*()_+)."
      );
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else if (!registrationNumberRegex.test(registrationNumber)) {
      alert("Please enter a valid registration number (5 digits).");
    } else if (!favoriteGameRegex.test(favoriteGame)) {
      alert("Please enter a valid favorite game.");
    } else {
      axios
        .post("http://localhost:8080/api/addStudent", {
          name,
          email,
          username,
          password,
          registrationNumber,
          dateOfBirth,
          age,
          favoriteGame,
        })
        .then((response) => {
          alert(response.data);
        })
        .catch((error) => {
          alert(error.message);
        });
      setName("");
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setRegistrationNumber("");
      setDateOfBirth("");
      setAge("");
      setFavoriteGame("");
    }
  };

  const handleDateChange = (event) => {
    const dob = new Date(event.target.value);
    setDateOfBirth(event.target.value);
    const today = new Date();
    const diffTime = Math.abs(today - dob);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    setAge(diffYears);
  };

  return (
    <div className="main-con">
      <h1 className="tag">Student Infomation Registration</h1>
      <p className="tag">Student Infomation Registration</p>

      <div className="form-container">
        <div className="form-box">
          <form className="reg-from" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder=" Full Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <input
              type="password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm Password"
            />
          
            <input
              type="text"
              name="registrationNumber"
              value={registrationNumber}
              onChange={(event) => setRegistrationNumber(event.target.value)}
              placeholder="Registration Number"
            />
            <input
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleDateChange}
            />

<input type="number" name="age" value={age} onChange={(event) => setAge(event.target.value)} placeholder="Age" readOnly />

            <input
              type="text"
              name="favoriteGame"
              value={favoriteGame}
              onChange={(event) => setFavoriteGame(event.target.value)}
              placeholder="Favorite Game"
            />
            <input type="submit" value="Register" />
            <button className="nextbtn" onClick={nextPage}>
              Next
            </button>
            <Link to={"/"}>
              <button className="backbtn">Back</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
