import UserList from "./components/UserList";

function App() {
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
        <h1 className='flex items-center justify-center font-bold text-4xl
          bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-800
        '>CRUD with Redux Toolkit</h1>
        <UserList/>
    </div>
  );
}

export default App;
