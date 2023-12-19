import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../User.css';

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3001/')
      .then(result=>setUsers(result.data))
    },[])
    return (
        <div className='card'>
        <div className='container'>
            <Link to="/createuser">Add +</Link>
            <table className='table'>
                <tbody>
                  <tr>
                    <td className='name'>Name</td>
                    <td className='email'>Email</td>
                    <td className='age'>Age</td>
                  </tr>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className='name'>{user.Name}</td>
                            <td className='email'>{user.Email}</td>
                            <td className='age'>{user.Age}</td>
                            <td>
                                <Link to="/updateuser" className='edit'>Edit</Link>
                                <button className='delete'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default User;
