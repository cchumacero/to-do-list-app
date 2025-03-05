import { type TaskTitle } from "../../types";
import { useState } from "react";

interface Props {
  saveTask: (title: TaskTitle) => void;
}
export const CreateTask = ({ saveTask }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (inputValue != "") saveTask(inputValue);
    setInputValue("");
  };
  return (
    <div className="add-task-container">
      <form onSubmit={handleSubmit}>
        <input
          className="new-task-input"
          value={inputValue}
          placeholder="Ingresa tu tarea..."
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          autoFocus
        />
        <button type="submit" className="btn-add-task">
          <span className="btn-add-task-text">+</span>
        </button>
      </form>
    </div>
  );
};
