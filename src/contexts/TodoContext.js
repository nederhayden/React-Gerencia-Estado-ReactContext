import React, { useState, createContext } from "react";

// Estado global da aplicacao
export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Item 1", done: false },
    { id: 2, title: "Item 2", done: false },
    { id: 3, title: "Item 3", done: false },
    { id: 4, title: "Item 4", done: false },
  ]);

  // Cria uma nova lista atualizada
  const saveTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      title: todo.title,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    // Value: todos os valores que quero deixar exposto/acessível
    <TodoContext.Provider value={{ todos, saveTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
