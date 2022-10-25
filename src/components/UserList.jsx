import React from 'react'
import Button from './Button';
import UserCard from './UserCard';

function UserList() {
  const users=[
    { id:1, name:'Mauro Kane', email: 'mdk.@yahoo.com'},
    { id:2, name:'Bruno Miguel', email: 'br_miguel.@yahoo.com'}
  ];
  
    const renderCard=()=>(
        <div className=''> 
            Users Card
        </div>
    )
        
    return (
      <>

        <Button>Add User</Button>
          <div className='grid gap-10 md:grid-cols-2'>
            {
              users.length ? <UserCard users={users}/> : 
              
              <p className='text-center col-span-2 text-gary-700 font-semibold'> No Users </p>    
            }
          </div>
        </>  
  )
}

export default UserList