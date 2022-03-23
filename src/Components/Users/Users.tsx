import s from './Users.module.scss'
import React from "react";
import {Link} from "react-router-dom";

interface UsersProps {
    userData: {
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
    }[],
    usersEnd: string
}

type userDataType = {
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
}


const Users: React.FC<UsersProps> = ({userData, usersEnd}) => {
    return <>
        <div className={s.itemWrapper}>
            <h2>Список пользователей</h2>
            <div className={s.itemUserWrapper}>
                {userData.map((item: userDataType) => {
                    return <div className={s.itemUser} key={item.id}>
                        <div>ФИО: <span>{item.name}</span></div>
                        <div>город: <span>{item.address.city}</span></div>
                        <div>компания: <span>{item.company.name}</span></div>
                        <Link to={`/userProfile/${item.id}`}>Подробнее</Link>
                    </div>
                })}
                <span>Найдено {userData.length} пользовате{usersEnd}</span>
            </div>
        </div>
    </>
}
export default Users;
