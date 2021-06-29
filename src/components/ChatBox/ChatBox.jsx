import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./ChatBox.scss";
import ChatIcon from "./ChatIcon.png";
import UserChat from "./UserChat/UserChat";
import OnlineIcon from "./OnlineIcon.png";
const ChatBox = () => {
  const [chatStyle, setChatStyle] = useState({
    maxHeight: "0",
    overflow: "hidden",
  });
  const [msgStyle, setMsgStyle] = useState({
    display:'block',
    right:"25vw"
  });
  const [msgBodyStyle,setMsgBodyStyle] = useState({
    maxHeight:"0",
    overflow:"hidden"
  })
  const [userData, setUserData] = useState([]);
  const [activeUser, setActiveUser] = useState({});
  const toggleChat = () => {
    if (chatStyle.maxHeight === "0") {
      setChatStyle({ maxHeight: "30vh", transition: ".6s ease-in-out" });
    } else {
      setChatStyle({
        maxHeight: "0",
        transition: ".6s ease-in-out",
        overflow: "hidden",
      });
    }
  };
  const toggleMsg = () => {
    if(msgBodyStyle.maxHeight === "0"){
    setMsgBodyStyle({
       maxHeight: "20vh",
       width:"15vw",
      transition: ".6s ease-in-out",
      right:"25vw",
  
     });
    } else{
      setMsgBodyStyle({
        maxHeight:"0",
      overflow:"hidden",
      transition: ".6s ease-in-out",
      right:'25vw'
    })
    }

  };

  useEffect(() => {
    const getUsers = async () => {
      const res = await Axios.get("https://panorbit.in/api/users.json");
      setUserData(res.data.users);
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="abs">
        <div className="chatBox" onClick={toggleChat}>
          <div className="chatIcon">
            <img src={ChatIcon} alt="icon" />
          </div>
          <div className="chatText">
            <div>Chats</div>
            {chatStyle.maxHeight === "0" ? (
              <>
                <div className="chat-close">^</div>
              </>
            ) : (
              <>
                <div className="chat-open">^</div>
              </>
            )}
          </div>
        </div>
        <div style={chatStyle} className="chatBody">
          {userData.length > 0 ? (
            <>
              {userData.map((el) => {
                return (
                  <div
                    class="userL"
                    key={el.id}
                    onClick={() => {
                      setActiveUser(el);
                      setMsgStyle({display:'block',right:'25vw'})
                    }}
                  >
                    <div>
                      <img class="pp" src={el.profilepicture} alt="pic" />
                      <span>{el.name}</span>
                    </div>
                    <div>
                      <img class="online" src={OnlineIcon} alt="online" />
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div>Loading...</div>
            </>
          )}
        </div>
      </div>
      {Object.keys(activeUser).length !== 0 ? (
        <>
          <div className="abs" style={msgStyle}>
            <div
              className="chatBox"
              style={{ width: "15vw" }}
              onClick={toggleMsg}
            >
              <div className="chatText">
            
                <div style={{display:'flex',alignItems:'center'}}>
                  <img src={activeUser.profilepicture} alt="pp" style={{width:'25px',height:'25px',
                  objectFit:'cover',borderRadius:'25px',marginRight:'0.4rem'}}/>
                  <span style={{fontSize:'0.9rem'}}>{activeUser.name}</span>
                  </div>
                  <div onClick={()=>{setMsgStyle({display:'none'})}}>
                    <span style={{backgroundColor:'white',color:'red',padding:'0 0.8rem',marginLeft:'0.4rem',borderRadius:'10px'}}>x</span>
                  </div>
        
              </div>
            </div>
            <div className="chatBody"  style={msgBodyStyle}>
             <div class="bubbleCont">
                <div>
                  Hi!
                </div>
                <div>
                  please check the Email i sent you
                </div>
                <div>
                  check if it has any errors
                </div>
                <div>
                  Thanks
                </div>
                <div>
                  Thanks
                </div>
                <div>
                  Thanks
                </div>
                <div>
                  Thanks
                </div>
             </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ChatBox;
