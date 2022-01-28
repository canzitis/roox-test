import axios from "axios";


const instanceAPI = {
    baseURL: 'https://jsonplaceholder.typicode.com/users'
}

export const getProfile = () => {
    return axios.get(`${instanceAPI.baseURL}`)
        .then(response => {
            return response
        })
}

