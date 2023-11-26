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

export interface IAddNewBoardType {
  boardName: string
  columns: IColumn[];
}

export interface IEditBoardType {
  boardName: string;
  boardId: string
}

export interface IEditColumnsType {
  boardId: string;
  columns?: IColumn[];
  deletedColumns?: IColumn[];
}

export interface IAddNewColumnsType {
  mainBoardId: string,
  columns: IColumn[]
}

export interface IAddTaskType {
  taskName: string;
  description: string;
  status: string;
  mainBoardId: string;
  columnId: string;
  subtasks?: Partial<ISubtask>[];
}

export interface IAddSubtasksType {
  mainBoardId?: string;
  mainTaskId?: string;
  subtasks?: Partial<ISubtask>[];
};

export interface IFailure {
  errorMessage: string
}

