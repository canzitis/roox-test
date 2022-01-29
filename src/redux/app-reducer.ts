import {getProfile} from "../API/API";

export type InitialStateType = {
    users: any,
    initialize: boolean,
}
export type UserDataType = {
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

let initialState: InitialStateType = {
    users: [],
    initialize: false
}


const SET_USERS = "SET_USERS"
const SET_INITIALIZE = "SET_INITIALIZE"

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.userData],

            };
        case SET_INITIALIZE:
            return {
                ...state,
                initialize: action.initialize
            }
        default:
            return state;
    }
}


const setUsers = (userData: any) => {
    return {
        type: SET_USERS,
        userData
    }
}

const setInitialize = (initialize: boolean) => {
    return {
        type: SET_INITIALIZE,
        initialize
    }
}


export const initializeProfile = () => {
    return async (dispatch: any) => {
        const userData: any = await getProfile()
        if (userData.status === 200) {
            dispatch(setUsers(userData.data))
            dispatch(setInitialize(true));
        }
    }
}

export default appReducer;
