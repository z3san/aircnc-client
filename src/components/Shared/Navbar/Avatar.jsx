import React from 'react';
import placeHolder from "../../../assets/images/placeholder.jpg"
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const Avatar = () => {

    const {user} = useContext(AuthContext)



    return <img src={user && user.photoURL ? user.photoURL : placeHolder } className='rounded-full' alt="profile" height={30} width={30} />
};

export default Avatar;