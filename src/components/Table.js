import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Table.css';

const Table = (props) => {




    // ============= Wyświetlanie 

    const displayData = props.data.map(user => {
      return (
  
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.lname}</td>
          <td>{user.event}</td>
          <td>{user.city}</td>
          <td><button
          onClick={() => deleteUser(user._id)}
          >usuń</button></td>
        </tr>
      )
    })

  const deleteUser = (id) => {
    axios
        .delete("http://localhost:8080/api/delete/" + id )
        .then((res) => {
            props.setData((data) => {
                return data.filter((user) => user._id !== id);
                
            });
        })
        .catch((error) => {
            console.error(error);
        });
};

  return (
    <div className="Table">
      <table className="container">
        <th>Imię</th>
        <th>Nazwisko</th>
        <th>Kurs</th>
        <th>Miasto</th>
        <th>Akcje</th>
        {displayData}
      </table>
    </div>
  );
}

export default Table;
