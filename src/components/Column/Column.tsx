'use client'
import React, { memo, useMemo } from 'react';

import { ITask, IColumn, TDragStartHandler, TDropHandler, TDragOverHandler } from '@/TypesRoot';
import { useTypedSelector } from '@/UtilsRoot';
import { Task } from '@/ComponentsRoot'
import { ColumnWrapper, Title, TasksList } from './Column.styled';

interface IColumnProps {
  column: IColumn;
  targetColumnId: string;
  dragStartHandler: TDragStartHandler;
  dropHandler: TDropHandler;
  dragOverHandler: TDragOverHandler
}

const Column: React.FC<IColumnProps> = ({ column, dragStartHandler, dropHandler, dragOverHandler, targetColumnId }) => {

  const { tasks } = useTypedSelector(state => state?.tasks);
  const { subtasks } = useTypedSelector(state => state?.subtasks);

  const filteredTasksByColumnStatus: ITask[] = useMemo(() => tasks.filter((task: ITask) => task?.status === column?.columnName), [tasks, column]) ?? [];

  return (
    <ColumnWrapper >
      <Title>{column?.columnName} ({filteredTasksByColumnStatus.length})</Title>
      <TasksList
        columnTarget={column?._id === targetColumnId}
        onDragOver={(e) => dragOverHandler(e, column)}
        onDrop={(e) => dropHandler(e, column)}
      >
        {
          filteredTasksByColumnStatus.length > 0 && filteredTasksByColumnStatus.map(task => (
            <Task
              draggable={true}
              dragOverHandler={dragOverHandler}
              dragStartHandler={dragStartHandler}
              key={task?._id}
              column={column}
              task={task}
              subtasks={subtasks}
            />
          ))
        }
      </TasksList>
    </ColumnWrapper>
  )
}

export default memo(Column);