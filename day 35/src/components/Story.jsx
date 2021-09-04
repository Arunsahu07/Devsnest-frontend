import React from "react";

export const Story = () => {
  return (
    <div className="story-container md-mx-5 ">
      {[...Array(25)].map((_, idx) => {
        return (
          <div  id="story" key={idx}>
           
            {console.log(`https://picsum.photos/6${parseInt(idx/2)}/6${parseInt(idx/2)}`)}
            <span className="img"> <img src={`https://picsum.photos/${idx%8+55}/${idx%8+55}`} alt="" className="story-img" /></span>
            <span className="story-username">username</span>
          </div>
        );
      })}
    </div>
  );
};
