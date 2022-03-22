
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';


function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  useEffect( () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  },[])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }
  const removeUser = id =>{
     setUsers(users.filter(user => user.id !== id))
  }

  return (

    <div className="App">
     <div className='container'>
     <UsersList users ={users} setUserSelected={setUserSelected} removeUser={removeUser}/>
      <UsersForm getUsers={getUsers} setUserSelected={setUserSelected} userSelected={userSelected} />
     </div>
     
     
    </div>

  );
}

export default App;
