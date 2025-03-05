import { Task } from "../Task/Task";
import { type Task as TaskType } from "../../types";
import { type ListOfTasks } from "../../types";
import "./Tasks.css";

interface Props {
  tasks: ListOfTasks;
  removeTask: (id: string) => void;
  completeTask: ({ id, completed }: Pick<TaskType, "id" | "completed">) => void;
}

export const Tasks = ({ tasks, removeTask, completeTask }: Props) => {
  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <li className={`${task.completed ? "completed" : ""}`} key={task.id}>
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        </li>
      ))}
    </ul>
  );
};
