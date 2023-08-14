import React from 'react';

import { Task } from '@/ComponentsRoot'
import { ColumnWrapper, Title, TasksList } from './Column.styled';

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

interface IColumn extends Document {
  name: string,
  id: string,
  tasks: Array<ITask>
}

interface IColumnProps {
  column: IColumn
}

const Column: React.FC<IColumnProps> = ({ column }) => {
  console.log(column)
  return (
    <ColumnWrapper>
      <Title>{column?.name}</Title>
      <TasksList>
        {
          column?.tasks.length > 0 && column?.tasks.map(task => (
            // @ts-ignore
            <Task key={task?.id} task={task} />
          ))
        }
      </TasksList>
    </ColumnWrapper>
  )
}

export default Column;