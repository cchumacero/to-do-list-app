import { CreateTask } from "../CreateTask/CreateTask";
import { type TaskTitle } from "../../types";

interface Props {
  taskToAdd: ({ title }: TaskTitle) => void;
}
export const Header = ({ taskToAdd }: Props) => {
  return (
    <header className="header">
      <h1>To Do List</h1>
      <CreateTask saveTask={taskToAdd} />
    </header>
  );
};
