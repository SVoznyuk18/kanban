import React, { DragEvent } from 'react'

import { ISubtask, ITask, IColumn } from '@/TypesRoot';
import { TaskWrapper, Title, SubTitle } from './Task.styled';

interface ITaskProps {
  task: ITask,
  column: IColumn,
  draggable: boolean,
  dragOverHandler: (e: DragEvent<HTMLUListElement | HTMLLIElement>) => void,
  dragLeaveHandler: (e: DragEvent<HTMLUListElement | HTMLLIElement>) => void,
  dragStartHandler: (e: DragEvent<HTMLUListElement | HTMLLIElement>, column: IColumn, task: ITask) => void,
  dragEndHandler: (e: DragEvent<HTMLUListElement | HTMLLIElement>) => void,
  dropHandler: (e: DragEvent<HTMLUListElement | HTMLLIElement>, column: IColumn, task: ITask) => void
}

const Task: React.FC<ITaskProps> = ({ task, column, draggable, dragOverHandler, dragLeaveHandler, dragStartHandler, dragEndHandler, dropHandler }) => {

  const countDoneSubTasks = (subTasks: Array<ISubtask>): number => {
    let count: number = 0;

    subTasks.forEach((subTask: ISubtask) => {
      if (subTask?.isCompleted) count + 1;
    });
    return count;
  }

  return (
    <TaskWrapper
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e, column, task)}
      onDrop={(e) => dropHandler(e, column, task)}
      draggable={draggable}
    >
      <Title>{task?.title}</Title>
      <SubTitle>{`${countDoneSubTasks(task?.subtasks)} of ${task?.subtasks?.length} subtasks`}</SubTitle>
    </TaskWrapper>
  )
}

export default Task;