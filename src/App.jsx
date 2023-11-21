import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [task, setTask] = useState([]); //タスク全体のリストを管理するステート
  const [newTask, setNewTask] = useState(""); //新しいタスクを追加するときのステート

  const handleCange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddtask = () => {
    if (newTask.trim() !== "") {
      setTask((prevTask) => [...prevTask, newTask]);
      setNewTask("");
    }
  };
  const handleResetTask = () => setTask([]);
  return (
    <>
      <h1>Todoリスト</h1>
      <ul>
        {task.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="新しいタスクを入力してください"
        value={newTask}
        onChange={handleCange}
      />
      <button onClick={handleAddtask}>追加</button>
      <button onClick={handleResetTask}>リセット</button>
    </>
  );
}

export default App;
