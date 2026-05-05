import "./style2.css";
import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import TodoFilter from "./TodoFilter";

export default function Abb() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("my-diary-data");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("my-diary-data", JSON.stringify(todos));
  }, [todos]);

  const addItem = (text, memo) => {
    const newItem = {
      id: Date.now(),
      name: text,
      memo: memo,
      color: "skyblue",
      completed: false,
      date: new Date().toLocaleString(),
    };
    setTodos([...todos, newItem]);
  };

  const deleteItem = (id) => setTodos(todos.filter((t) => t.id !== id));

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const editItem = (id, newName, newMemo) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, name: newName, memo: newMemo } : t
      )
    );
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div
      className="app-container"
      style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>📋 My Do It List</h1>
      <TodoInput onAdd={addItem} />
      <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <div
            style={{ textAlign: "center", padding: "50px 20px", color: "#888" }}
          >
            <p style={{ fontSize: "60px", margin: "0" }}>🍃</p>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>No works</p>
            <p>have a rest</p>
          </div>
        ) : (
          filteredTodos.map((item) => (
            <TodoItem
              key={item.id}
              {...item}
              onDelete={deleteItem}
              onToggle={toggleTodo}
              onEdit={editItem}
            />
          ))
        )}
      </div>
    </div>
  );
}
