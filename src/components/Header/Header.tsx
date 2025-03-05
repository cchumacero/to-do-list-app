import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const Header = ({ children }: Props) => {
  return (
    <header className="header">
      <h1>To Do List</h1>
      {children}
    </header>
  );
};
