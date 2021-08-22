import { useState } from "react";
import tick from "../Assets/download.png";
import delIcon from "../Assets/downloaded.png";
export interface todoType {
  task: string;
  isDone: boolean;
}
export default function Todo() {
  const [todo, setTodo] = useState<todoType[]>([]);
  const [val, setVal] = useState<string>("he");
  return (
    <div className="todo-container">
      <input
        placeholder="Enter a task here"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        onClick={() => {
          setVal("");
          setTodo([...todo, { task: val, isDone: false }]);
        }}
      >
        +
      </button>
      <div className="todo-container">
        {todo.map((item, idx) => {
          return (
            <div key={idx} className='todos'>
              <span className={item.isDone ? "true" : "false"}>
                {item.task}
              </span>
              <div>
              <img
                src={tick}
                alt=""
                className="done-btn"
                onClick={() => {
                  if (!item.isDone) {
                    const newState: todoType[] = todo.map(
                      (item, curIdx): todoType => {
                        if (curIdx === idx) return { ...item, isDone: true };
                        else return { ...item };
                      }
                    );
                    console.log(newState);
                    setTodo(newState);
                  }
                }}
                 />
              <img
                src={delIcon}
                alt=""
                className="del-btn"
                onClick={() => {
                  const newState: todoType[] = todo.filter((item, curidx) => {
                    return curidx !== idx;
                  });
                  setTodo(newState);
                }}
              />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
