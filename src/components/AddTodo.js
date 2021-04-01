import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const AddTodo = () => {
  // Pega referencia do context global
  const { saveTodo } = useContext(TodoContext);
  // Usa o estado localmente
  const [todo, setTodo] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveTodo(todo);
  };

  const handleInputChange = (e) => {
    // Cria um novo objeto
    setTodo({
      ...todo,
      title: e.target.value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Nova Tarefa"
        onChange={handleInputChange}
      />
      <button>Adicionar</button>
    </form>
  );
};

export default AddTodo;
