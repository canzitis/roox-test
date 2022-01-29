import axios from "axios";


/*Настройка axios*/

const instanceAPI = {
    baseURL: 'https://jsonplaceholder.typicode.com/users'
}


/*Проимитирую долгую загрузку данных,
    чтобы подольше отработал прелоадер*/

export const getProfile = () => {
    return new Promise(function (resolve) {
        return setTimeout(() => {
            axios.get(`${instanceAPI.baseURL}`)
                .then(response => {
                    return resolve(response)
                })
        }, 3000);

    })
}

