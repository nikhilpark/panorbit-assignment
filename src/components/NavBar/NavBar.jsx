import React,{useState, useEffect} from 'react' 
import Axios from 'axios'
import Tippy from '@tippyjs/react'
import './NavBar.scss'

const NavBar = () => {
    const psudoParams = window.location.pathname;
    console.log(psudoParams) 
    const username = psudoParams.slice(psudoParams.lastIndexOf('/') + 1 )
    const loc = (psudoParams.slice(1,psudoParams.lastIndexOf('/')))
    
    const [userData, setUserData] = useState([]);
    const [userLeft,setUserLeft] = useState([]);
    const [userRight,setUserRight] = useState([]);


   
    useEffect(()=>{

        const getUserByUsername = async() =>{
            const url = "https://panorbit.in/api/users.json"; 
            const {data} = await Axios.get(url)
            setUserData(data.users.filter(user => user.username === username))
            if(userData.length>0){
                console.log("dsa")
            const id = userData[0].id
            if(id === 1){
            setUserLeft(data.users.filter(user => user.id === id + 1))
            setUserRight(data.users.filter(user => user.id === id + 2))
           
            }
            else if(id === data.users.length){
            setUserLeft(data.users.filter(user => user.id === id - 1))
            setUserRight(data.users.filter(user => user.id === id - 2))
            }
            else{
                setUserLeft(data.users.filter(user => user.id === id + 1))
                setUserRight(data.users.filter(user => user.id === id - 1))
            
            }
            }
        }
        getUserByUsername()
        console.log(userData)
        console.log(userLeft)
        console.log(userRight)
         
    },[userData.length])
    const tippyContent = (
        <>
        
        {userData.length>0 && userLeft.length>0 && userRight.length>0?<><div id="tippyCont">
            <div id="tippyProfile">
                <div>
                    <img src={userData[0].profilepicture} alt="img"/>
                </div>
                <div>{userData[0].name}</div>
                <div><span>{userData[0].email}</span></div>
            </div>
            <div class="altUsers" onClick={()=>{window.location = `/profile/${userLeft[0].username}`}} >
                <div><img src={userLeft[0].profilepicture} alt="pic"/></div><div>{userLeft[0].name}</div>
            </div>
            <div class="altUsers" onClick={()=>{window.location = `/profile/${userRight[0].username}`}} >
            <div><img src={userRight[0].profilepicture} alt="pic"/></div><div>{userRight[0].name} </div>
            </div>
            <div id="logOutBtn">
                <button onClick={()=>(window.location = "/")}>Sign out</button>
            </div>
        </div></>:<><div>Loading...</div></>}
        
        </>
    )
    return (
        <div>
            {userData.length>0?<> <nav id="navBar">  
                <div>{loc.toUpperCase()}</div>
                <Tippy trigger="click" theme = "light" interactive content={tippyContent}>
                <div id="rightFlex">
                <div><img src={userData[0].profilepicture} alt="pic"/></div>
                <div>{userData[0].name}</div>
                </div>
                </Tippy>

            </nav></>:<>
            <div>Loading</div>

            </>}
           
        </div>
    )
}

export default NavBar
 