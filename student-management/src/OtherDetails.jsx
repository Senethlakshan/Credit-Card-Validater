import React from 'react';
import './CSS/other.css'


function OtherDetails({ nextPage, prevPage }) {

  const data = [
    {
      fullname: 'Seneth lakshan',
      email: 'kmseneth@gmail.com',
      username: 'kmseneth',
      registration_number: '12345',
      age: 23,
      date_of_birth: '2000-02-04',
      favorite_game: 'Footbol',
      creditcard_num: '*************654',
      cd_holder: 'km seneth',
      expire_date: '12-03-2025'
    }
  ];

  const columns = [
    { Header: 'Fullname', accessor: 'fullname' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Username', accessor: 'username' },
    { Header: 'Registration Number', accessor: 'registration_number' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Date of Birth', accessor: 'date_of_birth' },
    { Header: 'Favorite Game', accessor: 'favorite_game' },
    { Header: 'Credit Card Number', accessor: 'creditcard_num' },
    { Header: 'CD Holder', accessor: 'cd_holder' },
    { Header: 'Expire Date', accessor: 'expire_date' }
  ];

  return (
    <div className='mcontent'>
      <h1 className='tag4'>Student infomation</h1>
      <p className='tag4'>Please Check your infomation Correct !</p>

      <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.accessor}>{row[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>


      <button className='pbtn' onClick={prevPage}>Previous</button>
      <button  className='pbtn' onClick={nextPage}>Start here</button>
    </div>
  );
}

export default OtherDetails;
