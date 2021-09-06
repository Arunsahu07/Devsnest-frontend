import React from "react";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="userProfile">
    
          <span style={{display:"flex"}}>
            <i className="bi bi-person-circle"></i>
            <span className="user-detail" >
              <span style={{fontWeight:"700"}}>username</span>
              
             <span style={{opacity:"0.8"}}> user_id</span>
            </span>
          </span>
        <span className="link">Switch
        </span>
      </div>
      <p style={{fontWeight:"600"}}>seggesions for you</p>
      {[...Array(5)].map((_,idx)=>{
          return  <div className="suggested-userProfile" key={idx}>
    
          <span style={{display:"flex"}}>
            <img  src={`https://picsum.photos/50/${50+idx}`}  alt="" className="profile-imgs" />
            <span className="user-detail">
              <span style={{fontWeight:"700"}}>username</span>
              <div style={{opacity:"0.8"}}>follows you</div>
            </span>
          </span>
        <span className="link">follow</span>
      </div>      })}
    </div>
  );
};
