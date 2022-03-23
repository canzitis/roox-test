import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sortData} from "../../../redux/app-reducer";
import Sorting from "./Sorting";


type sortAddressType = {
    address: {
        city: string
    }
}

type sortCompanyType = {
    company: {
        name: string
    }
}

const SortingContainer = () => {
    const [newData, setNewData] = useState([]);
    const userData = useSelector((state: any) => state.users);
    const dispatch = useDispatch();

    console.log(userData)
    useEffect(() => {
        setNewData(userData.concat())
    }, [userData])

    const SortCityData = () => {
        setNewData(userData.concat())
        newData.sort((a: sortAddressType, b: sortAddressType) => {
            return a.address.city > b.address.city ? 1 : -1;
        })
        dispatch(sortData(newData))
    }

    const SortCompanyData = () => {
        setNewData(userData.concat())
        newData.sort((a: sortCompanyType, b: sortCompanyType) => {
            return a.company.name > b.company.name ? 1 : -1;
        })
        dispatch(sortData(newData))
    }
    return <>
        <Sorting SortCityData={SortCityData} SortCompanyData={SortCompanyData}/>
    </>
}

export default SortingContainer
