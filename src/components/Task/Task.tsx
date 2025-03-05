import {
  type Task as TaskType,
  type TaskId,
  type TaskCompleted,
} from "../../types";
import "./Task.css";

interface Props {
  task: TaskType;
  removeTask: (id: TaskId) => void;
  completeTask: (id: TaskId, completed: TaskCompleted) => void;
}

export const Task = ({ task, removeTask, completeTask }: Props) => {
  return (
    <>
      <input
        className="checkbox-task"
        type="checkbox"
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
          completeTask(task.id, event.target.checked)
        }
      />
      <span className="text">{task.title}</span>
      <button
        className="btn-close"
        onClick={() => {
          removeTask(task.id);
        }}
      ></button>
    </>
  );
};
