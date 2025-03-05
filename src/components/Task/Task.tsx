import { type Task as TaskType } from "../../types";
import "./Task.css";

interface Props extends TaskType {
  removeTask: (id: string) => void;
  completeTask: ({ id, completed }: Pick<TaskType, "id" | "completed">) => void;
}
export const Task = ({ id, title, removeTask, completeTask }: Props) => {
  return (
    <>
      <input
        className="checkbox-task"
        type="checkbox"
        onChange={(event) => {
          completeTask({ id, completed: event.target.checked });
        }}
      />
      <span className="text">{title}</span>
      <button
        className="btn-close"
        onClick={() => {
          removeTask(id);
        }}
      ></button>
    </>
  );
};
