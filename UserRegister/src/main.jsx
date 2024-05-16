import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserComponent from './UsersList.jsx';
import UserService from './userService.jsx';
import RegistrationForm from './RegistrationForm.jsx';
import Searchbyname from './searchbyname.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import './App.css'
import Editpreferences from "./Editpreferences.jsx"
import PaginationComponent from './pagination.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/list' element={<UserComponent/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/login/register" element={<RegistrationForm/>}/>
      <Route exact path="/searchbyname" element={<Searchbyname/>}/>
      <Route exact path='/login' element ={<Login/>}/>
      <Route path="/preferences" element={<Editpreferences/>}/>
      <Route path='/pagination' element={<PaginationComponent/>}/>
    </Routes>
    
  </BrowserRouter>
)
