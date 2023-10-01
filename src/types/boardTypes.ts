export interface ISubtask {
  _id: string,
  subtaskName: string,
  isCompleted: boolean,
  mainBoardId: string,
  mainTaskId: string,
  createdAt: Date,
  updatedAt: Date
}

export interface ITask {
  _id: string,
  taskName: string,
  description: string,
  status: string,
  mainBoardId: string,
  columnId: string,
  createdAt: Date,
  updatedAt: Date
}

export interface IColumn {
  _id: string,
  columnName: string,
  mainBoardId: string,
  createdAt: Date,
  updatedAt: Date
}

export interface IBoard {
  _id: string,
  boardName: string,
  url: string,
  createdAt: Date,
  updatedAt: Date
}
