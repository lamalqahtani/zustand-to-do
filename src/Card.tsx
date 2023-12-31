export const Card = ({ title, status }: { title: string; status: boolean }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "2px",
        width: "100%",
      }}
    >
      <p>{title}</p>
      <p>{status ? "completed" : "to-do"}</p>
    </div>
  );
};
