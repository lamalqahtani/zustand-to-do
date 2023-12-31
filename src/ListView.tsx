import useStore from "./store";

export const ListView = () => {
  const { tasks } = useStore();
  return (
    <div>
      <p>ListView</p>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.title}, {task.status ? "completed" : "to-do"}
          </li>
        ))}
      </ol>
    </div>
  );
};
