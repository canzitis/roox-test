import {useSelector} from "react-redux";
import {InitialStateType} from "../../redux/app-reducer";
import s from './Users.module.scss'
import Sorting from "../Sorting/Sorting";

const Users = () => {
    const userData = useSelector((state: InitialStateType) => state.users);

    return <div className={s.container}>
        <Sorting/>
        {/*<h2>Список пользователей</h2>*/}
        <div className={s.itemWrapper}>
            {userData.map((item: any) => {
                return <div className={s.itemUser} key={item.id}>
                    <div>ФИО: <span>{item.name}</span></div>
                    <div>город: <span>{item.address.city}</span></div>
                    <div>компания: <span>{item.company.name}</span></div>
                    <a href="">Подробнее</a>
                </div>
            })}
        </div>
    </div>
}

export default Users;
