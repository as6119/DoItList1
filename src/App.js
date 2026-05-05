import "./styles.css";
import React, { useState } from "react";
import Abb from "./Abb"; // 투두 리스트 본체 파일

export default function App() {
  // 현재 화면 상태를 관리 ('main' 또는 'todo')
  const [screen, setScreen] = useState("main");

  return (
    <div className="App">
      {screen === "main" ? (
        /* 메인 랜딩 화면 */
        <div className="content-box">
          <span className="main-emoji">🚀</span>
          <h1>Just Do It</h1>
          <h2>your better than yesterday</h2>

          <button className="start-btn" onClick={() => setScreen("todo")}>
            Start List
          </button>
        </div>
      ) : (
        /* 투두 리스트 화면 (Abb.js 호출) */
        <div className="todo-page">
          <button className="back-btn" onClick={() => setScreen("main")}>
            ← main
          </button>
          <Abb />
        </div>
      )}
    </div>
  );
}
