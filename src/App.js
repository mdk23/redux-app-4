import { Route, Routes } from "react-router-dom";

import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
        <h1 className='flex items-center justify-center font-bold text-4xl
          bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-800
        '>CRUD with Redux Toolkit</h1>
        
        <Routes>
          
          <Route path="/" element={<UserList/>}/>
          <Route path="/add-user" element={<AddUser/>}/>
          <Route path="/edit-user/:id" element={<EditUser/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
