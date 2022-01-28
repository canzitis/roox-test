import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {initializeProfile, InitialStateType} from "../../redux/app-reducer";
import Users from "../Users/Users";


const Home = () => {
    const initialize = useSelector((state: InitialStateType) => state.initialize);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeProfile())
    })

    return <>
        {initialize ? <h2>Загрузка</h2> : <Users/>}
    </>
}

export default Home;
