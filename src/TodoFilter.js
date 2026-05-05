import React from "react";

export default function TodoFilter({ currentFilter, onFilterChange }) {
  const filters = ["all", "active", "completed"];

  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          style={{
            border: currentFilter === f ? "2px solid #000" : "1px solid #ccc",
            padding: "5px 15px",
            borderRadius: "20px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
