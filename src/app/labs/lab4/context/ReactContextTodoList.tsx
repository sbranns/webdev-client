"use client";

import { useContext, useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const [newTodo, setNewTodo] = useState("")
  const {todos, addTodo, deleteTodo, updateTodo } = useTodosContext();
  return (
    <div id="wd-array-state-variables">
      <h2>Todos</h2>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        type="button"
        onClick={() => addTodo(newTodo)}
        id="wd-add-todo-click"
        className="mb-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add Todo
      </button>
      <ul className="m-0 max-w-xs list-none p-0">
        {todos.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 bg-green-50 px-3 py-1"
          >
            <span>{item}</span>
            <button
              type="button"
              onClick={() => deleteTodo(index)}
              id={`wd-delete-todo-${index}-click`}
              className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => updateTodo(index, newTodo)}
              id={`wd-update-todo-${index}-click`}
              className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}