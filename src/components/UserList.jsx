import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import Button from './Button';
import UserCard from './UserCard';
 

function UserList() {
  
  const {users} =useSelector(store=>store.user);
  
 
   /* 
    const renderCard=()=>(
          <div className=''> 
              Users Card
          </div>
      );
  */
    return (
      <>
        
        <Link to='/add-user'>
          <Button>Add User</Button>
        </Link>
          
          <div className='grid gap-5 md:grid-cols-2'>
            {
              users.length ? <UserCard users={users}/> : 
              
              <p className='text-center col-span-2 text-gary-700 font-semibold'> No Users </p>    
            }
          </div>
      
      </>  
  )
}

export default UserList

/** 
 * 
 Formas de imprimir os dados vindo store

 console.log( useSelector(store=>store.user) );
 users.map((user)=>console.log(user));
 
 */