import React from "react";
import "./ProfilePage.scss";
const ProfilePage = (props) => {
  console.log(props);
  return (
    <>
      {props.user ? (
        <>
          {" "}
          <div id="mainCont">
            <div id="leftGrid">
              <div id="userImg">
                <img
                  src={`${props.user[0].profilepicture}`}
                  alt="profile-pic"
                />
                <div>{props.user[0].name}</div>
              </div>
              <div id="userDetails">
                <div>
                  <span>Username : </span>
                  <span>{props.user[0].username}</span>
                </div>
                <div>
                  <span>E-mail : </span>
                  <span>{props.user[0].email}</span>
                </div>
                <div>
                  <span>Phone : </span>
                  <span>{props.user[0].phone}</span>
                </div>
                <div>
                  <span>Website : </span>
                  <span>{props.user[0].website}</span>
                </div>
              </div>
              <br />
              <hr color="lightgray" />
              <div id="userCompanyDetails">
                <div>
                  <span>Name : </span>
                  <span>{props.user[0].company.name}</span>
                </div>
                <div>
                  <span>Catchphrase : </span>
                  <span>{props.user[0].company.catchPhrase}</span>
                </div>
                <div>
                  <span>Bs : </span>
                  <span>{props.user[0].company.bs}</span>
                </div>
              </div>
            </div>
            <div id="rightGrid">
              <div id="address">
                Address :
                <div>
                  <span>Street : </span>
                  <span>{props.user[0].address.street}</span>
                </div>
                <div>
                  <span>Suite : </span>
                  <span>{props.user[0].address.suite}</span>
                </div>
                <div>
                  <span>City : </span>
                  <span>{props.user[0].address.city}</span>
                </div>
                <div>
                  <span>Zip Code : </span>
                  <span>{props.user[0].address.zipcode}</span>
                </div>
                <div id="gMap">
                  <iframe
                    title="map"
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55303.529388089795!2d${props.user[0].address.geo.lng}!3d${props.user[0].address.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1624885980863!5m2!1sen!2sin`}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                  {/* Map works but seems like the co-ordinates stored in the API are just random numbers */}
                  <div id="latlng">
                      <div>
                          Lat : {props.user[0].address.geo.lat}
                      </div>
                      <div>
                          Lng : {props.user[0].address.geo.lng}
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>Loading....</div>
        </>
      )}
    </>
  );
};
export default ProfilePage;
