import React, {useState} from "react";
import {Link} from "react-router-dom";
import s from './UserProfile.module.scss'
import {useForm} from "react-hook-form";
import SortingContainer from "../common/Sorting/SortingContainer";

interface UserProfileType {
    profile: {
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
    } | any
}

type dataType = {
    name: string | null
    userName: string | null
    email: string | null
    street: string | null
    city: string | null
    zipCode: string | null
    phone: string | null
    website: string | null
    comment: string | null
}

const UserProfile: React.FC<UserProfileType> = ({profile}) => {
    const [disabledButton, setDisabledButton] = useState(true)

    const editProfile = () => {
        disabledButton ? setDisabledButton(false) : setDisabledButton(true)
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<dataType>();

    const onSubmit = (data: dataType) => {
        //TODO: Вывожу данные в консоль, которые пошли на отправку
        console.log(data)

        setDisabledButton(true)
        reset({
            name: null,
            userName: null,
            email: null,
            street: null,
            city: null,
            zipCode: null,
            phone: null,
            website: null,
            comment: null,
        })
    };
    return <div className={s.container}>
        <SortingContainer/>
        <div className={s.wrapperInfoProfile}>
            <div className={s.headerInfo}>
                <h4>Профиль пользователя</h4>
                <button onClick={() => {
                    editProfile()
                }}>Редактировать
                </button>
            </div>
            <div className={s.profileInfoWrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.wrapperProfileForm}>

                        <div className={s.wrapperProfileFormItem}>
                            <h4>Name</h4>
                            <input
                                disabled={disabledButton}
                                type="text"
                                placeholder={profile.profile.name}
                                style={{border: errors.name && "solid 1px #D91313"}}
                                {...register("name",
                                    {
                                        required: true,
                                    })}
                            />
                        </div>

                        <div className={s.wrapperProfileFormItem}>
                            <h4>User Name</h4>
                            <input
                                disabled={disabledButton}
                                type="text"
                                placeholder={profile.profile.username}
                                style={{border: errors.userName && "solid 1px #D91313"}}
                                {...register("userName",
                                    {
                                        required: true,
                                    })}
                            />
                        </div>

                        <div className={s.wrapperProfileFormItem}>
                            <h4>E-mail</h4>
                            <input
                                disabled={disabledButton}
                                type="email"
                                placeholder={profile.profile.email}
                                style={{border: errors.email && "solid 1px #D91313"}}
                                {...register("email",
                                    {
                                        required: true,
                                    })}
                            />
                        </div>

                        <div className={s.wrapperProfileFormItem}>
                            <h4>Street</h4>
                            <input
                                disabled={disabledButton}
                                type="text"
                                placeholder={profile.profile.address.street}
                                style={{border: errors.street && "solid 1px #D91313"}}
                                {...register("street",
                                    {
                                        required: true,
                                    })}
                            />
                        </div>

                        <div className={s.wrapperProfileFormItem}>
                            <h4>City</h4>
                            <input
                                disabled={disabledButton}
                                type="text"
                                placeholder={profile.profile.address.city}
                                style={{border: errors.city && "solid 1px #D91313"}}
                                {...register("city",
                                    {
                                        required: true,
                                    })}
                            />
                        </div>

                        <div className={s.wrapperProfileFormItem}>
                            <h4>Zip code</h4>
                            <input
                                disabled={disabledButton}
                                type="text"
                                placeholder={profile.profile.address.zipcode}
                                style={{border: errors.zipCode && "solid 1px #D91313"}}
                                {...register("zipCode",
                                    {
                                        required: true,
                                    })}
                            />
                        </div>

                        <div className={s.wrapperProfileFormItem}>
                            <h4>Phone</h4>
                            <input
                                disabled={disabledButton}
                                type="text"
                                placeholder={profile.profile.phone}
                                style={{border: errors.phone && "solid 1px #D91313"}}
                                {...register("phone",
                                    {
                                        required: true,
                                    })}
                            />
                        </div>

                        <div className={s.wrapperProfileFormItem}>
                            <h4>Website</h4>
                            <input
                                disabled={disabledButton}
                                type="text"
                                placeholder={profile.profile.website}
                                style={{border: errors.website && "solid 1px #D91313"}}
                                {...register("website",
                                    {
                                        required: true,
                                    })}
                            />
                        </div>

                        <div className={s.wrapperProfileFormComment}>
                            <h4>Comment</h4>
                            <input
                                type="text"
                                {...register("comment")}
                            />
                        </div>
                    </div>
                    <div className={s.buttonWrapper}>
                        <Link className={s.buttonBack} to="/users">Назад</Link>
                        <input
                            disabled={disabledButton}
                            className={s.buttonSend}
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default UserProfile;
