"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
import { FaTrash } from "react-icons/fa6";
import { FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export default function WorkingWithRemoteArrayAsync() {
  const [todos, setTodos] = useState([{ id: "", title: "", completed: false }]);
  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const removeTodo = async (todo) => {
    setTodos(await client.removeTodo(todo));
  };
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };
  const editTodo = (todo) => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)),
    );
  };
  const updateTodo = async (todo) => {
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const deleteTodo = async (todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <>
      {errorMessage && (
        <p
          id="wd-todo-error-message"
          className="rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {errorMessage}
        </p>
      )}
      <FaPlusCircle
        onClick={createNewTodo}
        id="wd-create-todo"
        className="cursor-pointer text-green-600"
      />
      <FaPlusCircle
        onClick={postNewTodo}
        id="wd-post-todo"
        className="cursor-pointer text-blue-600"
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" defaultChecked={todo.completed} />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </span>
            <FaTrash
              onClick={() => removeTodo(todo)}
              id="wd-remove-todo"
              className="cursor-pointer text-red-600"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              id="wd-delete-todo"
              className="cursor-pointer text-2xl text-red-600"
            />
            <div>
              <FaPencilAlt
                onClick={() => editTodo(todo)}
                className="cursor-pointer text-blue-600"
              />
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) =>
                  updateTodo({ ...todo, completed: e.target.checked })
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
