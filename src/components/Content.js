import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../routes/Home";
import About from "../routes/About";
import Navbar from "../navbar/Navbar";
import Joke from "../routes/Joke";
import LoginForm from "../components/LoginForm";
import Test from "../routes/Test";


const Content = ({ loggedIn,login,user,logout}) => {
    return (
        <Router>
            <Navbar user={user} loggedIn={loggedIn} login={login} logout={logout}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About user={user}/>}/>
                <Route path="/joke" element={<Joke/>}/>
                <Route path="/login" element={<LoginForm login={login}/>}/>
               <Route path="/test" element={<Test/>}/>
            </Routes>
           
        </Router>
        
  )
}

export default Content
