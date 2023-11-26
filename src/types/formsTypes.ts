import { IColumn, ISubtask } from '@/TypesRoot';

export interface IBoardForm {
  boardName: string
  columns?: Partial<IColumn>[];
  deletedFields?: Partial<IColumn>[];
}

export interface ITaskForm {
  taskName: string;
  description: string;
  status: string;
  subtasks?: Partial<ISubtask>[];
  deletedFields?: ISubtask[];
}

export type TAddNewColumnsForm = Pick<IColumn, 'columnName'>;

export interface IChangeSubtaskForm {
  subtasks: ISubtask[];
  status: string;
}
