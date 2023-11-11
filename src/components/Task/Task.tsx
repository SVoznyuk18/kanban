import React, { useContext, useMemo, memo } from 'react'

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

  const filteredSubtasksByTaskId: ISubtask[] = useMemo(() => (
    subtasks.filter((subtask: ISubtask) => subtask?.mainTaskId === task?._id)
  ), [subtasks, task]);

  const countDoneSubTasks: number = useMemo(() => (
    filteredSubtasksByTaskId.reduce((accum, subtask) => subtask?.isCompleted ? accum + 1 : accum, 0)
  ), [filteredSubtasksByTaskId]);

  const openModal = () => {
    handleOpenModal("ChangeSubtask");
    setPayload({ subtasks: filteredSubtasksByTaskId, task, column });
  }

  return (
    <TaskWrapper
      onDragOver={(e) => dragOverHandler(e, column)}
      onDragStart={(e) => dragStartHandler(e, task)}
      onClick={openModal}
      draggable={draggable}
    >
      <Title>{task?.taskName}</Title>
      <SubTitle>{`${countDoneSubTasks} of ${filteredSubtasksByTaskId.length} subtasks`}</SubTitle>
    </TaskWrapper>
  )
}

export default memo(Task);