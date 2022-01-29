import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {initializeProfile, InitialStateType} from "../../redux/app-reducer";
import Users from "../Users/Users";
import Preloader from "../common/Preloader/Preloader";


const Home = () => {
    const initialize = useSelector((state: InitialStateType) => state.initialize);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeProfile())
    })

    if (!initialize) {
        return <Preloader initialize={initialize}/>
    }

    return <>
        <Users/>
    </>
}

export default Home;
