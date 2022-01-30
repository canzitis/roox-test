import React from 'react';
import s from './App.module.css';
import {Route} from 'react-router';
import {BrowserRouter, Routes} from 'react-router-dom';
import UserProfile from "./Components/UserProfile/UserProfile";
import Users from "./Components/Users/Users";

function App() {
    return (
        <div className={s.App}>
            <BrowserRouter>
                <Routes>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/userProfile' element={<UserProfile/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
