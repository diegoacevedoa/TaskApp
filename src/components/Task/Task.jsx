import { TaskContextProvider } from "../../context/TaskContext";
import TaskForm from "./Form";
import TaskList from "./List";

const Task = () => {
  return (
    <TaskContextProvider>
      <main className="bg-zinc-900 h-screen">
        <div className="container mx-auto p-10">
          <TaskForm />
          <TaskList />
        </div>
      </main>
    </TaskContextProvider>
  );
};

export default Task;
