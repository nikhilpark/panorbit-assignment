import React from 'react'
import './SideBar.scss'
import {Link} from "react-router-dom"

export const SideBar = () => {
    const psudoParams = window.location.pathname
    const user = psudoParams.slice(psudoParams.lastIndexOf('/') + 1 )
    
    
    return (
        <div id="sideBarCont">
            <div>
                <ul>
 
                    <li>
                     <Link to={`/profile/${user}`}> Profile </Link>
                        <hr/>
                    </li>
                     
                    <li>
                    <Link to={`/posts/${user}`}> Posts </Link>
                        <hr/>
                    </li>
                    
                    <li>
                    <Link to={`/Gallery/${user}`}>Gallery </Link>
                        <hr/>
                    </li>
                    
                    <li>
                    <Link to={`/ToDo/${user}`}> ToDo </Link>
                        <hr/>
                    </li>
                  
                </ul>
            </div>
        </div>
    )
}

export default SideBar