export type TaskId = string
export type TaskTitle = string
export type TaskCompleted = boolean

export interface Task {
  id: TaskId;
  title: TaskTitle;
  completed: TaskCompleted;
}

export type ListOfTasks = Task []
