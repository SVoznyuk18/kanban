import { IBoard, IColumn, ISubtask, ITask } from '@/TypesRoot';

export interface IResponseBoard {
  result: IBoard,
  success: boolean
}

export interface IResponseAllBoards {
  result: Array<IBoard>
  success: boolean
}

export interface IResponseColumns {
  result: Array<IColumn>
  success: boolean
};

export interface IResponseSubtasks {
  success: boolean;
  result: ISubtask[];
}

export interface IResponseTask {
  success: boolean;
  result: ITask;
}

export interface IResponseAllTasks {
  success: boolean;
  result: ITask[];
}
