import s from './Sorting.module.scss'
import React from 'react'

interface SortingProps {
    SortCityData: () => void,
    SortCompanyData: () => void,
}

const Sorting: React.FC<SortingProps> = ({SortCityData, SortCompanyData}) => {
    return <div className={s.container}>
        <h3>Сортировка</h3>
        <button onClick={() => SortCityData()}>по городу</button>
        <button onClick={() => SortCompanyData()}>по компании</button>
    </div>
}
export default Sorting;
