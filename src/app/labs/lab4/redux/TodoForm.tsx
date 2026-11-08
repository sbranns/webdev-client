import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, ReduxTodo, updateTodo } from "./todosReducer";
import type { RootState } from "./store";
import TodoItem from "./TodoItem";

export default function TodoForm() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Learn Mongo");
  const [editingId, setEditingId] = useState<string | null>(null);
  const onEdit = (todo: ReduxTodo) => {setTitle(todo.title); setEditingId(todo.id);}
  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <div className="mb-2 flex flex-wrap gap-2">
        <input
          id="wd-redux-todo-title"
          className="rounded border border-neutral-300 px-2 py-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="button"
          id="wd-redux-add-todo"
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
          onClick={() => {
            if (editingId) {
              dispatch(updateTodo({ id: editingId, title }));
              setEditingId(null);
            } else {
              dispatch(addTodo(title));
            }
            setTitle("Learn Mongo");
          }}
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onEdit={onEdit}/>
        ))}
      </ul>
    </div>
  );
}