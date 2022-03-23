import s from './Sorting.module.scss'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, sortData, UserDataType} from "../../../redux/app-reducer";

type UsertType = {
    users: {
        id: number,
        name: string,
        email: string,
        address: {
            street: string,
            city: string,
            zipcode: string
        },
        phone: string,
        company: {
            name: string,
        },
        website: string
    }[]
}

const Sorting = () => {
    const [newData, setNewData] = useState([]);
    const userData = useSelector((state: any) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        setNewData(userData.concat())
    }, [userData])

    const SortCityData = () => {
        setNewData(userData.concat())
        newData.sort((a: any, b: any) => {
            return a.address.city > b.address.city ? 1 : -1;
        })
        dispatch(sortData(newData))
    }

    const SortCompanyData = () => {
        setNewData(userData.concat())
        //const newData = userData.concat();
        newData.sort((a: any, b: any) => {
            return a.company.name > b.company.name ? 1 : -1;
        })
        dispatch(sortData(newData))
    }
    return <div className={s.container}>
        <h3>Сортировка</h3>
        <button onClick={() => SortCityData()}>по городу</button>
        <button onClick={() => SortCompanyData()}>по компании</button>
    </div>
}
export default Sorting;
