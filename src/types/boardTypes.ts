export interface ISubtask {
  _id: string,
  title: string,
  isCompleted: boolean,
  mainTaskId: string,
  createdAt: Date,
  updatedAt: Date
}

export interface ITask {
  _id: string,
  title: string,
  description: string,
  status: string,
  mainColumnId: string
  // subtasks: Array<ISubtask>,
  createdAt: Date,
  updatedAt: Date
}

export interface IColumn {
  _id: string,
  columnName: string,
  mainBoardId: string,

  // tasks: Array<ITask>,
  createdAt: Date,
  updatedAt: Date
}

export interface IBoard {
  _id: string,
  boardName: string,
  // columns: Array<IColumn>,
  createdAt: Date,
  updatedAt: Date
}
