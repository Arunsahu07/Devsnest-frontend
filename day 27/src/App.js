import AddTodo from './components/Addtodo'
import ListTodo from './components/ListTodo'
import './App.css';

export default function App()
{
  return (
      <div>
          <h1>Todo List using Redux</h1>
          <AddTodo/>
          <ListTodo/>
      </div>
  )
  
}