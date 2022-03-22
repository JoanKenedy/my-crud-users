import React from 'react';

const UsersList = ({users, setUserSelected, removeUser}) => {
    return (
        <div className='user-list'>
            {
                users.map( user => (
                  <div key={user.id} className='list'>
                      <div className='item_list'>
                      <h2>{user.first_name}  {user.last_name}</h2>
                      
                   
                      <h4> {user.email}</h4>
                     
                      <p> <i className='fa-solid fa-gift'></i> {user.birthday}</p>
                      </div>
                   
                      <div className='item_list'>
                      <button onClick={() => removeUser(user.id)} >
                     
                      <i className='fa-solid fa-trash remove'></i>
                  </button>
                   <button onClick={() => setUserSelected(user)} >
                   <i className='fa-solid fa-pencil edit'></i>
                </button>
                      </div>
                    
                     
                  </div>
                 
                ))
            }
          
        </div>
    );
};

export default UsersList;