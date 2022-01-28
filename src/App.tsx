import React from 'react';
import './App.css';
import {Route} from 'react-router';
import Home from "./Components/Hone/Home";
import {BrowserRouter, Routes} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
