import React, { useState, useEffect } from "react";
import "./LandingPage.scss";

import { Link } from "react-router-dom";
import Axios from "axios";

const LandingPage = () => {
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const url = "https://panorbit.in/api/users.json"; 
      const res = await Axios.get(url);
      setUserArray(res.data.users);
      console.log(userArray);
    };
    getUsers();
  }, []);

  return (
    <div id="landingCont">
      <div id="accSelCont">
        <div id="accSelHead">
          <div>Select an account</div>
        </div>
        <div id="accSelBody">
          {userArray.length > 0 ? (
            <>
              <div>
                {userArray.map((el, idx) => {
                  return (
                    <>
                      <div class="userList" key={idx}>
                        <div class="userImg">
                          <img src={el.profilepicture} alt="profile-pic" />
                        </div>
                        <div class="userName">
                          <Link
                            to={`profile/${el.username}`}
                          >
                            {el.name} 
                          </Link>
                        </div>
                      </div> 
                      <hr />
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
