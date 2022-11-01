import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../reducers/userSlice';
import Button from './Button';
import TextField from './TextField'
function EditUser() {
  
    const params=useParams();
    // console.log(params.id) imprime o valor do params

    const dispatch=useDispatch();
    

    const navigate =useNavigate();  
    const {users} =useSelector(store=>store.user);

   //Buscar o user atraves do ID
   //Tudo vindo do params é string 

   const filtered = users.filter(user => {
    return user.id.toString() === params.id;
  });
    
   const {name,email}= filtered[0]; 
    
   
   
   const [values,setValues]=useState( { name, email }); // nao é preciso por {name:name, email:email} porque tem o mesmo nome
 
    const handleEditUser=()=>{
         
        dispatch( editUser(
            {
                id: params.id,
                name: values.name,
                email: values.email
            }
        )
        )
         
        setValues({ name:'', email:''}); //Apagar os input fields antes de sair 
        navigate('/')
        
    }

  
  
    return (
    <div className='mt-10 max-w-xl mx-auto'>

            <TextField 
            label={'Name'}
            value={values.name}
            onChange={ (e)=>setValues({...values, name: e.target.value} )} 
            inputProps={{type:'text', placeholder:'Jon Doe' }} />
            
            <TextField 
            label={'Email'}
            value={values.email}
            onChange={(e)=>setValues({...values, email: e.target.value} )} 
            inputProps={{type:'text', placeholder:'jondoe@mail.com' }}/>

            <div className='flex flex-row justify-center'>
                <Button onClick={handleEditUser}> Edit</Button>
            </div>

    </div>
  )
}

export default EditUser