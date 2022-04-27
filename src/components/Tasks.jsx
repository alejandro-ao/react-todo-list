import Task from "./Task";

const Tasks = () => {
  return (
    <div className="todo-list__tasks mt-3">
      <Task taskName={"Do Laundry"} checked={false} />
      <Task taskName={"Do Laundry"} checked={false} />
      <Task taskName={"Do Laundry"} checked={false} />
      <Task taskName={"Do Laundry"} checked={false} />
    </div>
  );
};

export default Tasks;
