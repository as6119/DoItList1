import React, { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");
  const [memo, setMemo] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") {
      alert("write more please "); // 빈 칸일 때 알림창 띄우기
      return;
    }
    onAdd(text, memo);
    setText("");
    setMemo("");
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      // input 태그에 onKeyDown 속성을 추가합니다.
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit(); // 엔터키를 누르면 등록 함수 실행!
        }}
        placeholder="To do list"
        /* 기존 스타일... */
      />
      <textarea
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="write details"
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          minHeight: "60px",
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "12px",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ➕ plus work
      </button>
    </div>
  );
}
