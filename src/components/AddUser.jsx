import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../reducers/userSlice';

import Button from './Button';
import TextField from './TextField'

import {v4 as uuidv4} from 'uuid';

function AddUser() {

   const dispatch=useDispatch();

   const navigate =useNavigate();
   
    const [values,setValues]=useState( { name:'', email:''});

    const handleAddUser=()=>{
        //Apagando os valores do input fields antes de imprimir, mostra continua a mostrar os valores dos input fields!
        //console.log(values); //Imprime os valores dos input fields
        
        dispatch(addUser({id: uuidv4(), name: values.name, email: values.email }));
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
                <Button onClick={handleAddUser}> Submit</Button>
            </div>

    </div>
        
  )
}

export default AddUser