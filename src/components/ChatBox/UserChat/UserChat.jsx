import React from 'react'
import OnlineIcon from "../OnlineIcon.png";


const UserChat = (props) => {
    return (
        <>
            <div class="userL" key={props.data.id} >
                    <div>
                      <img class="pp" src={props.data.profilepicture} alt="pic" />
                      <span>{props.data.name}</span>
                    </div>
                    <div>
                      <img class="online" src={OnlineIcon} alt="online" />
                    </div>
                  </div>
        </>
    )
}

export default UserChat
