import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  // Pega referencia do context global
  const context = useContext(TodoContext);

  const data = context.todos.map((todo) => (
    <TodoListItem key={todo.id} todo={todo}></TodoListItem>
  ));
  return <div>{data}</div>;
};

export default TodoList;
