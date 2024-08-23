import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  console.log(todos)
  return (
    <ul>
      {todos.map(todo => {
        return (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />);
        ;
      })}
    </ul>
  );
};
