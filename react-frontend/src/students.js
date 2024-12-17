import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = '';

useEffect(() => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log('Fetched data:', data);
      setStudents(data); // Ensure data is an array
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
}, []);


  return (
    <div>
      <h3>Students List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Java</th>
            <th>CPP</th>
            <th>Python</th>
            <th>GenAI</th>
            <th>FSD</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.scores.Java}</td>
              <td>{student.scores.CPP}</td>
              <td>{student.scores.Python}</td>
              <td>{student.scores.GenAI}</td>
              <td>{student.scores.FSD}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
