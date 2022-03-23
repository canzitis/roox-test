import React from 'react';
import s from './App.module.css';
import {Navigate, Routes, Route} from 'react-router-dom';
import UsersProfileContainer from "./Components/UserProfile/UsersProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App() {
    return (
        <div className={s.App}>
            <Routes>
                <Route path="/" element={<Navigate to="/users" replace={true}/>}/>
                <Route path='/users' element={<UsersContainer/>}/>
                <Route path='/userProfile/:id' element={<UsersProfileContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
