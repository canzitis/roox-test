import axios from "axios";


/*Настройка axios*/

const instanceAPI = {
    baseURL: 'https://jsonplaceholder.typicode.com/users'
}


/*Проимитирую долгую загрузку данных,
    чтобы подольше отработал прелоадер*/

export const api = {
    getUsers() {
        return new Promise(function (resolve) {
            return setTimeout(() => {
                axios.get(`${instanceAPI.baseURL}`)
                    .then(response => {
                        return resolve(response)
                    })
            }, 2000);
        })
    },

    getProfileUser(id: number) {
        return axios.get(`${instanceAPI.baseURL}/${id}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return console.log(error);
            })
    },
}


