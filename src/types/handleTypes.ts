import { DragEvent } from 'react';

import { IColumn, ITask } from '@/TypesRoot';

export type TDragStartHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>, task: ITask) => void;
export type TDropHandler = (e: DragEvent<HTMLUListElement>, column: IColumn) => void;
export type TDragOverHandler = {
  (e: DragEvent<HTMLUListElement | HTMLLIElement>, column: IColumn): void;
  (e: DragEvent<HTMLUListElement | HTMLLIElement>): void;
}