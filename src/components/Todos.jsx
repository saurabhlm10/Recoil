import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";

const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState("");

  function addTodo() {
    setTodos((prev) => [...prev, inputText]);
    setInputText("");
  }

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  return (
    <main>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={addTodo}>Add Todo</button>
      <button>Delete Todo</button>
      {todos.map((todo) => (
        <div>{todo}</div>
      ))}
    </main>
  );
};

export default Todos;
