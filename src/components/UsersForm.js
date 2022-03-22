import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUsers, userSelected, setUserSelected}) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');

 useEffect (() => {
     if (userSelected) {
        setFirstName(userSelected.first_name);
        setLastName(userSelected.last_name);
        setEmail(userSelected.email);
        setPassword(userSelected.password);
        setBirthday(userSelected.birthday); 
     }
  
 }, [userSelected])
    

    const sendData = e =>{
        e.preventDefault()
       const user = {
           first_name: first_name,
           last_name: last_name,
           email: email,
           password: password,
           birthday: birthday
       }
       if (userSelected) {
          axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user )
          .then(() => {
              getUsers();
              setUserSelected(null);
              setFirstName('');
              setLastName('');
              setEmail('');
              setPassword('');
              setBirthday('');
            
        });
       }else{
        axios.post('https://users-crud1.herokuapp.com/users/', user)
        .then(() =>{
         getUsers();
         setFirstName('');
         setLastName('');
         setEmail('');
         setPassword('');
         setBirthday('');
 
        } )
        .catch(error => console.log(error.response))
     }
       }
     


    return (
        <div className='user-form'>
             
            <form onSubmit={sendData}>
            {
                    userSelected ? (
                        <h2>Edit User</h2>
                    ) : (
                        <h2>
                            New User
                        </h2>
                    )
                }
                <div className='form-control'>
                <i className='fa-solid fa-user-gear'></i>
                <input type="text" 
                placeholder='first name' className='input-40'
                onChange={e => setFirstName(e.target.value)}
                value={first_name}
                />
                  <input type="text" 
                placeholder='last name' className='input-40'
                onChange={e => setLastName(e.target.value)}
                value={last_name}
                />
            

                </div>
              
                <div className='form-control'>
                <i className='fa-solid fa-envelope'></i>
                    <input type="email"
                    placeholder='email'  className='input-100'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    />
                </div>
                <div className='form-control'>
                <i className='fa-solid fa-lock'></i>
                    <input type="password"
                    placeholder='password'  className='input-100'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    />
                </div>
                <div className='form-control'>
                <i className='fa-solid fa-cake-candles'></i>
                    <input type="date"
                    placeholder='' className='input-100' 
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                    />
                </div>
                <button type='submit'>
                {
                    userSelected ? 'Edit ' : 'Add '
                }
                </button>

            </form>
            
        </div>
    );
};

export default UsersForm;