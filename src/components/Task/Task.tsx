import React, { useContext, useMemo } from 'react'

import { ISubtask, ITask, IColumn, TDragStartHandler, TDragOverHandler } from '@/TypesRoot';
import { TaskWrapper, Title, SubTitle } from './Task.styled';
import { ModalContext } from '@/LibRoot';

interface ITaskProps {
  task: ITask,
  column: IColumn,
  subtasks: ISubtask[];
  draggable: boolean,
  dragStartHandler: TDragStartHandler;
  dragOverHandler: TDragOverHandler
}

const Task: React.FC<ITaskProps> = ({ task, subtasks, column, draggable, dragOverHandler, dragStartHandler }) => {

  const { handleOpenModal, setPayload } = useContext(ModalContext);

  const countDoneSubTasks = (subtasks: ISubtask[]): number => {
    let count: number = 0;

    subtasks.forEach((subtask: ISubtask) => {
      if (subtask?.isCompleted) count + 1;
    });
    return count;
  }

  const filteredSubtasksByTaskId: ISubtask[] = subtasks.filter((subtask: ISubtask) => subtask?.mainTaskId === task?._id);

  const openModal = () => {
    handleOpenModal("CheckSubtask");
    setPayload({ subtasks: filteredSubtasksByTaskId, task, column });
  }

  return (
    <TaskWrapper
      onDragOver={(e) => dragOverHandler(e, column)}
      onDragStart={(e) => dragStartHandler(e, task)}
      onClick={() => openModal()}
      draggable={draggable}
    >
      <Title>{task?.taskName}</Title>
      <SubTitle>{`${countDoneSubTasks(filteredSubtasksByTaskId)} of ${filteredSubtasksByTaskId.length} subtasks`}</SubTitle>
    </TaskWrapper>
  )
}

export default Task;