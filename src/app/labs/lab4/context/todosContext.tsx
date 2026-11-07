import { createContext, useContext, useState, type ReactNode } from "react";

type TodosContextValue = {
  todos: string[];
  addTodo: (todo: string) => void;
  deleteTodo: (index: number) => void;
  updateTodo: (index: number, newTodo: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState(["Go on a walk", "Cook", "Shop"]);

  function addTodo(todo: string) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(index: number) {
    setTodos(todos.filter((_item, i) => i !== index));
  }

  function updateTodo(index: number, newTodo: string) {
    setTodos(todos.map((todo, i) => (i === index ? newTodo : todo)));
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}
