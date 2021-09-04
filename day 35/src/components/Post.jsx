import React from "react";

export const Post = () => {
  const [value, setValue] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [state, setState] = React.useState("");
  const idx = Math.floor(Math.random()*15);
  return (
    <div>
      <div className="post-containers ">
        <div className="post-user">
          <span>username</span>
          <i className="bi bi-three-dots"></i>
        </div>
        <img
          src={`https://picsum.photos/${idx + 500}/${idx + 600}`}
          alt=""
          className="postImage"
        />
        <div>
          <div className="post-options">
            <span>
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
            <br/>
            <br />
            {comment}
          </div>
          <div className="post-nav ">
            <i className="bi bi-emoji-smile-fill"></i>
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
            <botton
              onClick={() => {
                setComment(value);
                setValue("");
              }}
            >
              post
            </botton>
          </div>
        </div>
      </div>
    </div>
  );
};
