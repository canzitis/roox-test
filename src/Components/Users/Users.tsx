import {useSelector} from "react-redux";
import {InitialStateType} from "../../redux/app-reducer";
import s from './Users.module.css'

const Users = () => {
    const userData = useSelector((state: InitialStateType) => state.users);

    return <div className={s.container}>
        <h2>Список пользователей</h2>
        {userData.map((item: any) => {
            return <div className={s.itemUser} key={item.id}>
                <span>{item.name}</span>
                <span>{item.address.city}</span>
                <span>{item.company.name}</span>
                <a href="">Подробнее</a>
            </div>
        })}
    </div>
}

export default Users;
