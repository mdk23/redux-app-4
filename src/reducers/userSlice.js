import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   users:[ { id:1, name:'Mauro Danilo Kane', email: 'mdk@yahoo.com'}, {id:2, name:'Bruno Miguel', email: 'br_miguel.@yahoo.com'}]
}



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state,action)=>{
      console.log(action.payload);
      state.users.push(action.payload);
    },
    editUser:(state,action)=>{
      const {id,name,email}=action.payload;
      const existingUser=state.users.find(user=>user.id.toString()===id);
      
      console.log(existingUser);  
      if(existingUser){
        existingUser.name=name;
        existingUser.email=email;
      }

    },
    deleteUser:(state,{payload})=>{
        console.log(payload);
        state.users=state.users.filter((user)=>user.id!==payload )
    }


  }
});

export const {addUser,editUser,deleteUser} = userSlice.actions

export default userSlice.reducer