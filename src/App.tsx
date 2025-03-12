import { useState } from "react";
import "./App.css";
import { Header, CreateTask, Tasks } from "./components";
import {
  type Task as TaskType,
  type TaskTitle,
  type TaskId,
  type TaskCompleted,
} from "./types";

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const item = localStorage.getItem("tasks");
    return item ? JSON.parse(item) : [];
  });

  const handleRemove = (id: TaskId): void => {
    const newTasks = tasks.filter((task) => task.id != id);
    setTasks(newTasks);
    try {
      window.localStorage.setItem("tasks", JSON.stringify(newTasks));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleted = (id: TaskId, completed: TaskCompleted): void => {
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

  const handleTaskToAdd = (title: TaskTitle): void => {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    const newTasks = [...tasks, newTask];
    try {
      setTasks(newTasks);
      window.localStorage.setItem("tasks", JSON.stringify(newTasks));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="task-list">
      <Header>
        <CreateTask saveTask={handleTaskToAdd} />
      </Header>
      <Tasks
        completeTask={handleCompleted}
        removeTask={handleRemove}
        tasks={tasks}
      />
    </div>
  );
};

export default App;
