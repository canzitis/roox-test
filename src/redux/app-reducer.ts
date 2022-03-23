import {Dispatch} from "redux";
import {api} from "../API/API";

const SET_USERS = "SET_USERS"
const SET_PROFILE = "SET_PROFILE"
const SET_INITIALIZE = "SET_INITIALIZE"
const SORT_DATA = "SORT_DATA"


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
}[]

export type ProfileType = {
    name: string,
    username: string
    email: string,
    address: {
        street: string,
        city: string,
        zipcode: string
    },
    phone: string,
    website: string
}

export type InitialStateType = {
    users: UserDataType | [],
    profile: ProfileType | null,
    initialize: boolean,

}
let initialState: InitialStateType = {
    users: [],
    profile: null,
    initialize: false
}


type ActionsTypes = setUsersType | setInitializeType | sortDataType | profileType;
const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.userData],

            };
        case SET_PROFILE:
            return {
                ...state,
                profile: {...action.profile},
                initialize: true
            }
        case SET_INITIALIZE:
            return {
                ...state,
                initialize: action.initialize
            };
        case SORT_DATA:
            return {
                ...state,
                users: [...action.sortData]
            };
        default:
            return state;
    }
}
export default appReducer;


type setUsersType = {
    type: typeof SET_USERS,
    userData: UserDataType
}
const setUsers = (userData: UserDataType): setUsersType => {
    return {
        type: SET_USERS,
        userData
    }
}


type setInitializeType = {
    type: typeof SET_INITIALIZE,
    initialize: boolean
}
const setInitialize = (initialize: boolean): setInitializeType => {
    return {
        type: SET_INITIALIZE,
        initialize
    }
}


type sortDataType = {
    type: typeof SORT_DATA
    sortData: any
}
export const sortData = (sortData: any): sortDataType => {
    return {
        type: SORT_DATA,
        sortData
    }
}


type profileType = {
    type: typeof SET_PROFILE
    profile: ProfileType
}
const setProfile = (profile: ProfileType): profileType => {
    return {
        type: SET_PROFILE,
        profile
    }
}

export const addedUsers = () => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(setInitialize(false));
        const data: any = await api.getUsers()
        if (data.status === 200) {
            dispatch(setUsers(data.data))
            dispatch(setInitialize(true));
        }
    }
}

export const addedProfileUser = (id: number) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        const data: any = await api.getProfileUser(id)
        dispatch(setInitialize(false));
        if (data.status === 200) {
            dispatch(setProfile(data.data))
        }
    }
}

