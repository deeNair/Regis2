// import {useState} from 'react';
 //import { getUser } from './utilities/users-service';

 import'./App.css';

import { Routes, Route} from 'react-router-dom';
 import { useState, useEffect,  } from "react";

//components imports
import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import Homepage from './components/HomePage';
import EditUser from './components/EditUser';
function App() {
    //const [user, setUser] = useState(getUser());

  return (
    <>
      <NavBar/>
       <Routes>
        <Route path='/'element={<Homepage/>}/>
         <Route path='/all'element={<AllUsers/>}/>
         <Route path='/add'element={<AddUser/>}/>
         <Route path='/edit/:id'element={<EditUser/>}/>
      </Routes>
   </>
  );
}

export default App;
