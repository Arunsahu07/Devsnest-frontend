import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./actions";
const ListTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  return todos.map((todo, idx) => {
    return (
      <div key={idx} className='items'>
        <span>{todo.title}</span>
        <button
          onClick={(e) => {
            e.target.parentNode.classList.toggle("completed");
          }}
        >
          complete
        </button>
        <button onClick={() => dispatch(removeItem(idx))}>delete</button>
      </div>
    );
  });
};
export default ListTodo;
