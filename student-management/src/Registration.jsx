import React, { useState } from 'react';
import axios from 'axios';
import './CSS/Regis.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Registration({ nextPage }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const usernameRegex = /^[a-zA-Z0-9_-]{5,20}$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{6,20}$/;

    if (!nameRegex.test(name)) {
      alert('Please enter a valid name.');
    } else if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
    } else if (!usernameRegex.test(username)) {
      alert('Please enter a valid username (5-20 characters, alphanumeric or _, -).');
    } else if (!passwordRegex.test(password)) {
      alert('Please enter a valid password (6-20 characters, alphanumeric or !@#$%^&*()_+).');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.');
    } else {
      axios.post('http://localhost:8080/register', {
        name,
        email,
        username,
        password
      })
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
      setName('');
      setEmail('');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    }
  };
  
  return (
   
     <div className="main-con">
     <h1 className='tag'>Student Infomation Registration</h1>
      <p className='tag'>Enter your details here</p>

      <div className="form-container">
      <div className="form-box">
      <form className='reg-from' onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
      <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      <input type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
      <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
      <input type="password" name="confirm-password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm Password" />
      <input type="submit" value="Register" />
      <button  className='nextbtn' onClick={nextPage}>Next</button>
      <Link to={"/"} ><button className='backbtn' >Back</button></Link>
    </form>
      </div>
      </div>
     </div>

    
  );
}

export default Registration;
