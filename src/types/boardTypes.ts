export interface ISubtask {
  _id: string,
  title: string,
  isCompleted: boolean,
  createdAt: Date,
  updatedAt: Date
}

export interface ITask {
  _id: string,
  title: string,
  description: string,
  status: string,
  subtasks: Array<ISubtask>,
  createdAt: Date,
  updatedAt: Date
}

export interface IColumn {
  _id: string,
  name: string,
  tasks: Array<ITask>,
  createdAt: Date,
  updatedAt: Date
}

export interface IBoard {
  _id: string,
  name: string,
  columns: Array<IColumn>,
  createdAt: Date,
  updatedAt: Date
}
