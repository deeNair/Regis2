 import {useState} from 'react';
 import { getUser } from './utilities/users-service';
 import { Routes, Route } from 'react-router-dom';

 import'./App.css';
 import AuthPage from './pages/AuthPage';


//components imports
import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import Homepage from './components/HomePage';
import EditUser from './components/EditUser';



function App() {
    const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? 
    <>
    <div>
      <NavBar user={user} setUser={setUser}/>
       <Routes>
       
         <Route path='/all' element={<AllUsers/>}/>
         <Route path='/add' element={<AddUser/>}/>
         <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
      </div>
   </>
   : 
   <AuthPage setUser={setUser}/>
   }
   </main>
  );
}

export default App;

/** <Route path='/' element={<Homepage/>}/> */