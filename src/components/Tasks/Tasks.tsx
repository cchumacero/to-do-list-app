import { Task } from "../Task/Task";
import { TaskCompleted, TaskId } from "../../types";
import { type ListOfTasks } from "../../types";
import "./Tasks.css";

interface Props {
  tasks: ListOfTasks;
  removeTask: (id: string) => void;
  completeTask: (id: TaskId, completed: TaskCompleted) => void;
}

export const Tasks = ({ tasks, removeTask, completeTask }: Props) => {
  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <li className={`${task.completed ? "completed" : ""}`} key={task.id}>
          <Task
            task={task}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        </li>
      ))}
    </ul>
  );
};
