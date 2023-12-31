import { useState } from "react";
import { CardView } from "./CardView";
import { ListView } from "./ListView";
import useStore from "./store";
import "./App.css";

function App() {
  const [isListView, setIsListView] = useState<boolean>(true);
  const [task, setTask] = useState<string>("");
  const { tasks, addTask } = useStore();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <input
          style={{ padding: "10px" }}
          type="text"
          placeholder="add a new task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addTask({ title: task, status: false });
          }}
        >
          Add Task
        </button>
        <button onClick={() => setIsListView(!isListView)}>
          {isListView ? "card view?" : "list view?"}
        </button>
      </div>
      {isListView ? <ListView /> : <CardView />}
    </>
  );
}

export default App;
