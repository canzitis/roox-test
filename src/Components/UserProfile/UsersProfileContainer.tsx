import UserProfile from "./UserProfile";
import React, {useEffect} from "react";
import {addedProfileUser, InitialStateType} from "../../redux/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const UsersProfileContainer = () => {
    const dispatch = useDispatch();
    const profileData = useSelector((state: InitialStateType) => state);
    const id = useParams().id;

    useEffect(() => {
        dispatch(addedProfileUser(Number(id)))
    }, [id])

    if (!profileData.profile) {
        return <span>Загрузка</span>
    }

    return <>
        <UserProfile profile={profileData}/>
    </>
}
export default UsersProfileContainer;
