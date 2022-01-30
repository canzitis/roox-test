import s from './Sorting.module.scss'
import React from 'react'

interface SortingProps {
    Sort: any
}

const Sorting: React.FC<SortingProps> = ({Sort}) => {
    return <div className={s.container}>
        <h3>Сортировка</h3>
        <button onClick={() => Sort()}>по городу</button>
        <button>по компании</button>
    </div>
}
export default Sorting;
