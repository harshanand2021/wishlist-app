import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const onInputChange = (e) => {
    setTodo(e.target.value);
  };

  const onAddTodoClick = () => {
    setTodoList([...todoList, { id: uuid(), todo: todo }]);
    setTodo("");
  };

  console.log(todoList);

  return (
    <div className="App">
      <h1>My Wishlist</h1>
      <div>
        <input
          value={todo}
          onChange={onInputChange}
          placeholder="Add your wishlist here..."
        />
        <button onClick={onAddTodoClick}>Add</button>
      </div>
      <div>
        {todoList &&
          todoList.length > 0 &&
          todoList.map((todo) => (
            <div key={todo.id}>
              <label>
                <input type="checkbox" />
                <span>{todo.todo}</span>
              </label>
              <button>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
