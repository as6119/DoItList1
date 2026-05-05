import React from "react";

export default function TodoItem({
  id,
  name,
  memo,
  date,
  bgColor,
  completed,
  onDelete,
  onToggle,
  onEdit,
}) {
  const handleEdit = (e) => {
    e.stopPropagation();
    // prompt를 통해 기존 이름을 기본값으로 보여주고 새 이름을 입력받는다.
    const newName = window.prompt("Edit you ", name);
    // 취소를 누르지 않고 내용이 비어있지 않을 때만 수정 실행
    const newMemo = window.prompt("write detail again: ", memo);
    if (newName !== null && newName.trim() !== "") {
      onEdit(id, newName, newMemo);
    }
  };

  return (
    <div
      className={`todo-card ${completed ? "completed" : ""}`}
      style={{
        border: "1px solid #007bff",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "skyblue",
        position: "relative",
        opacity: completed ? 0.5 : 1,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <button
        onClick={() => onToggle(id)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: bgColor,
          cursor: "pointer",
          width: "100%",
          textAlign: "left",
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "20px" }}>
          {completed ? "✅ " : "📌 "} {name}
        </h1>
        <small style={{ color: "gray", display: "block", marginTop: "5px" }}>
          🕒 {date}
        </small>
        {memo && (
          <p
            style={{
              margin: "10px 0 0 0",
              fontSize: "14px",
              color: "#555",
              fontStyle: "italic",
            }}
          >
            {memo}
          </p>
        )}
      </button>
      {/* 수정 기능 */}
      <button
        onClick={handleEdit}
        style={{
          position: "absolute",
          top: "5px",
          right: "40px", // 삭제 버튼 옆에 배치
          backgroundColor: "#ffcc00",
          color: "black",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          width: "30px",
          height: "30px",
          fontSize: "16px",
        }}
      >
        ✏️
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          if (window.confirm(`"${name}" are you sure to delete?`)) {
            onDelete(id);
          }
        }}
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          width: "30px",
          height: "30px",
          fontSize: "16px",
        }}
      >
        🗑️
      </button>
    </div>
  );
}
