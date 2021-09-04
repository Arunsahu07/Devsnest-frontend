import { useState } from "react";

import instaLogo from "../Assets/735145cfe0a4.png";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
const Navbar = () => {
  const [state, setState] = useState("");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img src={instaLogo} />
       
        <input placeholder="search"></input>
        <div className=" icons" id="navbarSupportedContent">
    
            <span className="nav-item">
              <i
                className={
                  state == "home"
                    ? "bi bi-house-door-fill colored"
                    : "bi bi-house-door"
                }
                onClick={() => {
                  setState("home");
                }}
              ></i>
            </span>
            <span className="nav-item">
              <i
                className={
                  state == "msg"
                    ? "bi bi-chat-right-fill colored"
                    : "bi bi-chat-right"
                }
                onClick={() => {
                  setState("msg");
                }}
              ></i>
            </span>

            <span  className="nav-item">
              <i
                className={
                  state == "disc" ? "bi bi-disc-fill colored" : "bi bi-disc"
                }
                onClick={() => {
                  setState("disc");
                }}
              ></i>
            </span>

            <span className="nav-item">
              <i
                className={
                  state == "heart" ? "bi bi-heart-fill colored" : "bi bi-heart"
                }
                onClick={() => {
                  setState("heart");
                }}
              ></i>
            </span>
            
          
        </div>

        
      </div>
    </nav>
  );
};
export default Navbar;
