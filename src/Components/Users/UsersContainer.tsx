import React, {useEffect, useState} from "react";
import {addedUsers, InitialStateType} from "../../redux/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import s from './UsersContainer.module.scss'
import SortingContainer from "../common/Sorting/SortingContainer";

const UsersContainer = () => {
    const [usersEnd, setUsersEnd] = useState('')
    const userData = useSelector((state: any) => state.users);
    const initialize = useSelector((state: InitialStateType) => state.initialize);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(addedUsers())
        /*Сделаю небольшую проверку склонения окончания до 10 пользователей.*/
        if (userData.length <= 1) {
            setUsersEnd("ль");
        } else if (userData.length >= 2 && userData.length <= 4) {
            setUsersEnd("ля");
        } else {
            setUsersEnd("лей");
        }
    },[])

    if (!initialize) {
        return <Preloader initialize={initialize}/>
    }
    return <div className={s.container}>
        <SortingContainer/>
        <Users userData={userData} usersEnd={usersEnd}/>
    </div>
}

export default UsersContainer;
