import {useDispatch, useSelector} from "react-redux";
import {initializeProfile, InitialStateType} from "../../redux/app-reducer";
import s from './Users.module.scss'
import Sorting from "../common/Sorting/Sorting";
import React, {useEffect, useState} from "react";
import Preloader from "../common/Preloader/Preloader";

const Users = () => {
    const userData = useSelector((state: InitialStateType) => state.users);
    const initialize = useSelector((state: InitialStateType) => state.initialize);
    const dispatch = useDispatch();
    const [usersEnd, setUsersEnd] = useState('')
    const [fs, setFs] = useState(false)
    const [sortSity, setSortSity] = useState([])

    useEffect(() => {

        dispatch(initializeProfile())

        setTimeout(() => {
            setFs(true)
        }, 2600)

        /*Сделаю небольшую проверку склонения окончания до 10 пользователей.*/
        if (userData.length <= 1) {
            setUsersEnd("ль");
        } else if (userData.length >= 2 && userData.length <= 4) {
            setUsersEnd("ля");
        } else {
            setUsersEnd("лей");
        }
    }, [userData.length])


    const Sort = () => {
        console.log(userData);
        userData.map((item: any) => {
            // @ts-ignore
            return setSortSity(item.address.city)
        });

        console.log(sortSity)

        sortSity.sort((a: any, b: any) => {
            return a - b
        });
    }

    if (!initialize) {
        return <Preloader initialize={fs}/>
    }

    return <div className={s.container}>
        <Sorting Sort={Sort}/>
        <div className={s.itemWrapper}>
            <h2>Список пользователей</h2>
            <div className={s.itemUserWrapper}>
                {userData.map((item: any) => {
                    return <div className={s.itemUser} key={item.id}>
                        <div>ФИО: <span>{item.name}</span></div>
                        <div>город: <span>{item.address.city}</span></div>
                        <div>компания: <span>{item.company.name}</span></div>
                        <a href="">Подробнее</a>
                    </div>
                })}
                <span>Найдено {userData.length} пользовате{usersEnd}</span>
            </div>
        </div>
    </div>
}

export default Users;
