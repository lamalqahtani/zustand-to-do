import useStore from "./store";
import { Card } from "./Card";

export const CardView = () => {
  const { tasks } = useStore();
  return (
    <>
      <p>CardView</p>
      <div style={{ display: "flex", gap: "2rem" }}>
        {tasks.map((task, index) => (
          <Card key={index} title={task.title} status={task.status} />
        ))}
      </div>
    </>
  );
};
