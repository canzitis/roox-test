import s from './Sorting.module.scss'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, sortData} from "../../../redux/app-reducer";


const Sorting = () => {
    debugger;
    const [newData, setNewData] = useState([]);
    const userData = useSelector((state: InitialStateType) => state.users);
    const dispatch = useDispatch();

    useEffect(()=>{
        setNewData(userData.concat())
    },[userData])

    const SortCityData = () => {
        //const newData = userData.concat();
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
