import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import ProfilePage from './ProfilePage/ProfilePage';
import './Profile.scss'

export const Profile = (props) => {
    const username = props.match.params.username

    const [userData, setUserData] = useState();

   
    useEffect(()=>{

        const getUserByUsername = async() =>{
            const url = "https://panorbit.in/api/users.json"; 
            const {data} = await Axios.get(url)
            setUserData(data.users.filter(user => user.username === username))
        }
    
        getUserByUsername()
        
    },[])
    
    return (
        <>
        <ProfilePage user={userData}/> 
        </>
    )
}
