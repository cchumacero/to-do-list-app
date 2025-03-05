import { useState } from "react";
import "./App.css";
import { Header, Tasks } from "./components";
import { type Task as TaskType, type TaskTitle } from "./types";

const mockTasks = [
  {
    id: "1",
    title: "Hacer el task manager",
    completed: false,
  },
  {
    id: "2",
    title: "task 2",
    completed: false,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(mockTasks);

  const handleRemove = (id: string): void => {
    const newTasks = tasks.filter((task) => task.id != id);
    setTasks(newTasks);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TaskType, "id" | "completed">): void => {
    const newTasks = tasks.map((task) => {
      if (task.id == id) {
        return {
          ...task,
          completed,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskToAdd = ({ title }: TaskTitle): void => {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };
  return (
    <div className="task-list">
      <Header taskToAdd={handleTaskToAdd} />
      <Tasks
        completeTask={handleCompleted}
        removeTask={handleRemove}
        tasks={tasks}
      />
    </div>
  );
};

export default App;
