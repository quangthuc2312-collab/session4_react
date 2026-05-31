import { useState } from "react";
import TierLayout from "../components/TierLayout";
import TodoItem from "../components/TodoItem";
import TodoFilter from "../components/TodoFilter";

function Tier7TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Học JSX", done: true },
    { id: 2, text: "Làm Todo App", done: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  function addTodo() {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      done: false
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") addTodo();
  }

  function toggleTodo(id) {
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )));
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id, text) {
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, text } : todo
    )));
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.done));
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.done).length;
  const completedCount = todos.filter((todo) => todo.done).length;

  return (
    <TierLayout
      title="Tier 7 — Mini Project Todo App"
      goal="Tổng hợp component, useState, event, list, CRUD, conditional rendering và filter."
    >
      <div className="todo-app">
        <h1>📋 Todo List</h1>

        <div className="todo-input-row">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={filter === "completed" ? "Thêm việc mới..." : "Nhập công việc..."}
          />
          <button onClick={addTodo}>Thêm</button>
        </div>

        <TodoFilter filter={filter} setFilter={setFilter} />

        <div className="todo-list">
          {filteredTodos.length === 0 ? (
            <div className="empty-text">
              {todos.length === 0 ? "Chưa có công việc nào" : "Không có công việc phù hợp"}
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </div>

        {todos.length > 0 && (
          <div className="todo-footer">
            <span>{activeCount} việc chưa xong</span>
            <span>{completedCount} việc đã xong</span>
            {completedCount > 0 && <button className="small muted" onClick={clearCompleted}>Xóa việc đã xong</button>}
          </div>
        )}
      </div>
    </TierLayout>
  );
}

export default Tier7TodoApp;
