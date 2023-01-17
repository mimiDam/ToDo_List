import React, { useEffect, useState, useRef } from "react";
import List from "./List";
import "./todo.css";

const Parent = () => {
  const CheckForStorage = () => {
    const local = localStorage.getItem("todo");
    if (local !== null) {
      return JSON.parse(local);
    } else {
      return [];
    }
  };

  const [todo, setTodo] = useState(CheckForStorage());

  const toInput = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setTodo((todo) => [
      {
        id: Math.floor(Math.random() * 100),
        title: toInput.current.value,
        done: false,
      },
      ...todo,
    ]);
    console.log(todo);
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <div className="todo containerTodo">
        <div className="back">
          <h1>To Do List:</h1>
          <div className="together">
            <div clasName="flex">
              <form onSubmit={onSubmit}>
                <input ref={toInput} type="text" id="list" name="list" />
                <button onClick={onSubmit}>Add</button>
              </form>
            </div>
            <List todo={todo} setTodo={setTodo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Parent;
