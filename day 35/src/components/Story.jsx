import React from "react";

export const Story = () => {
  const story = React.useRef(null);
  React.useEffect(() => {
    console.log(story.current);
    story.current.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="story-container md-mx-5 " ref={story}>
      {console.log(story.current)}

      <i
                class="bi bi-chevron-left"
        onClick={() => {
          story.current.scrollBy({
            top: 0,
            left: 200,
            behavior: "smooth",
          });
        }}
      ></i>
      <i
                class="bi bi-chevron-right"
        onClick={() => {
          story.current.scrollBy({
            top: 0,
            left: -200,
            behavior: "smooth",
          });
        }}
      ></i>
      {[...Array(25)].map((_, idx) => {
        return (
          <div id="story" key={idx}>
            <span className="img">
              {" "}
              <img
                src={`https://picsum.photos/${60+idx}/${60+idx}`}
                alt=""
                className="story-img"
              />
            </span>
            <span className="story-username">username</span>
          </div>
        );
      })}
    </div>
  );
};
