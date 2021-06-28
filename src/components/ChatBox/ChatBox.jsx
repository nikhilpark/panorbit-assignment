import React,{useState} from "react";
import "./ChatBox.scss";
import ChatIcon from "./ChatIcon.png";
const ChatBox = () => {
    
    const [chatStyle,setChatStyle] = useState({minHeight:'0'});
    const toggleChat = () =>{
        if(chatStyle.minHeight === '0'){

        setChatStyle({minHeight:'30vh',transition:'.6s ease-in-out'})
        }else{
        setChatStyle({minHeight:'0',transition:'.6s ease-in-out'})
        }
    }
  return (
      <>
      <div id="abs">
    <div id="chatBox" onClick={toggleChat}>
      <div id="chatIcon">
        <img src={ChatIcon} alt="icon" />
      </div>
      <div id="chatText">
        <div>Chats</div>
        <div>^</div>
      </div>
    </div>
    <div style={chatStyle} id="chatBody">
    </div>
    </div>
    </>
  );
};

export default ChatBox;
