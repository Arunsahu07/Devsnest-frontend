import React from "react";

export const Post = ({index}) => {
  const [value, setValue] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [state, setState] = React.useState("");
  // const idx = Math.floor(Math.random()*15);
   return (
   <div key={index} data-aos="fade-up">
      <div className="post-containers ">
        <div className="post-user">
          <span>username</span>
          <span><i className="bi bi-three-dots"></i></span>
        </div>
        <img
          src={`https://picsum.photos/${index + 500}/${index + 600}`}
          alt=""
          className="postImage"
        />
        <div>
          <div className="post-options">
            <span style={{display:'flex',alignItems:"center"}}>
              <i
                className={
                  state === "heart" ? "bi bi-heart-fill" : "bi bi-heart"
                }
                onClick={() => {
                  setState("heart");
                }}
              ></i>
              <i
                className={state === "chat" ? "bi bi-chat-fill" : "bi bi-chat"}
                onClick={() => {
                  setState("chat");
                }}
              ></i>
              <i
                className={
                  state === "share" ? "bi bi-share-fill" : "bi bi-share"
                }
                onClick={() => {
                  setState("share");
                }}
              ></i>
            </span>
            <span>
              <i
                className={
                  state === "book" ? "bi bi-bookmark-fill" : "bi bi-bookmark"
                }
                onClick={() => {
                  setState("book");
                }}
              ></i>
            </span>
          </div>
          <div>234 Likes</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            quo voluptates ea autem adipisci soluta tempore nam assumenda
            <br />
            {comment}
          </div>
          <div className="post-nav ">
            <span><i className="bi bi-emoji-smile-fill"></i></span>
            <input
              placeholder="add a comment"
              onKeyPress={(e) => {
                console.log(e);
                if (e.keyCode === 13) {
                  setComment(e.target.value);
                  e.target.value = "";
                }
              }}
              onChange={(e) => setValue(e.target.value)}
              value={value}
            ></input>
            <button
              onClick={() => {
                setComment(value);
                setValue("");
              }}
             style={{border:"none"}}>
              post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
