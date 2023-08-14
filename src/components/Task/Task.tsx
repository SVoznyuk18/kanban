import React from 'react'

import { TaskWrapper, Title, SubTitle } from './Task.styled';

interface ISubtask extends Document {
  title: string,
  isCompleted: boolean,
  timestamps: boolean
}

interface ITask extends Document {
  title: string,
  description: string,
  status: string,
  id: string,
  subtasks: Array<ISubtask>
}

interface ITaskProps {
  task: ITask
}

const Task: React.FC<ITaskProps> = ({ task }) => {

  const countDoneSubTasks = (subTasks: Array<ISubtask>): number => {
    let count: number = 0;

    subTasks.forEach((subTask: ISubtask) => {
      if (subTask?.isCompleted) count + 1;
    });
    return count;
  }

  return (
    <TaskWrapper>
      <Title>{task?.title}</Title>
      <SubTitle>{`${countDoneSubTasks(task?.subtasks)} of ${task?.subtasks?.length} subtasks`}</SubTitle>
    </TaskWrapper>
  )
}

export default Task;