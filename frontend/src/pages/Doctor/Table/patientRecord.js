import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const patientRecord = () => {
   
    const [item, setItem] = useState([]);
    const url = "http://localhost:3000/portal/health/post";
    useEffect(() => {
      const getItem = async () => {
        const { data: res } = await axios.get(url);
        setItem(res);
      };
      getItem();
    }, [])

  return (
    <div>
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {item.map(post => 
                <tr key={item.id}>
                    <td>{item.fname}</td>
                    <td>{item.mname}</td>
                    <td>{item.lname}</td>
                    <td>{item.gender}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                    <td>{item.contact}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default patientRecord