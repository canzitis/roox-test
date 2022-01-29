import React from 'react';
import s from './App.module.css';
import {Route} from 'react-router';
import Home from "./Components/Home/Home";
import {BrowserRouter, Routes} from 'react-router-dom';

function App() {
    return (
        <div className={s.App}>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
