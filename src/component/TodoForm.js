import React, { useState } from "react";

export const Todoform = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [placeholder,setPlaceholder] = useState("What is the task today?");
  const [className,setClassName] = useState("todo-input");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setPlaceholder("Please Enter Valid Task");
      setClassName("invalid")
    } else {
      addTodo(value);
      setValue("");
      setPlaceholder("What is the task today?");
      setClassName("todo-input")

    }
  };
  // ${value===""?"invalid":"todo-input"}
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        // className="todo-input"
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
