"use client";
import { useState } from "react";

export default function WorkingWithRemoteArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "",
    description: "",
    completed: false,
  });
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const API = `${HTTP_SERVER}/lab5/todos`;
  return (
    <>
    <h3 className="text-xl font-bold">Working with remote array async</h3>
      <a
        id="wd-retrieve-todo-by-id"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <br />
      <a
        id="wd-retrieve-completed-todos"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <br />
      <a
        id="wd-create-todo"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <br />
      <a
        id="wd-remove-todo"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}
      </a>
      <br />
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        id="wd-update-todo-title"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Update Todo
      </a>
      <input
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <a
        id="wd-completed-todo"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Complete Todo ID = {todo.id}
      </a>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
      />
      <br />
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        id="wd-update-todo-desc"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Describe Todo ID = {todo.id}
      </a>
      <input
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
    </>
  );
}
