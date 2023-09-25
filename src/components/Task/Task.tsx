import React, { DragEvent } from 'react'

import { ISubtask, ITask, IColumn } from '@/TypesRoot';
import { TaskWrapper, Title, SubTitle } from './Task.styled';
import { useTypedSelector } from '@/UtilsRoot';

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

  const subtasks = useTypedSelector(state => state?.subtasks?.subtasks);

  // console.log('subTasks', subtasks)

  const countDoneSubTasks = (subtasks: ISubtask[]): number => {
    let count: number = 0;

    subtasks.forEach((subtask: ISubtask) => {
      if (subtask?.isCompleted) count + 1;
    });
    return count;
  }

  const filteredSubtasksByTaskId: ISubtask[] = subtasks.filter((subtask: ISubtask) => subtask?.mainTaskId === task?._id);

  console.log('task?._id', task?._id)
  // console.log('subTasks', subtasks)
  console.log('filteredSubtasksByTaskId', filteredSubtasksByTaskId)
  console.log('length', filteredSubtasksByTaskId.length)

  return (
    <TaskWrapper
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e, column, task)}
      onDrop={(e) => dropHandler(e, column, task)}
      draggable={draggable}
    >
      <Title>{task?.taskName}</Title>
      <SubTitle>{`${countDoneSubTasks(filteredSubtasksByTaskId)} of ${filteredSubtasksByTaskId.length} subtasks`}</SubTitle>
    </TaskWrapper>
  )
}

export default Task;