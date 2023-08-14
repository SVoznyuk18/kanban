'use client'
import React, { useState, DragEvent } from 'react';

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


  const [currentColumn, setCurrentColumn] = useState<IColumn | null>(null);
  const [currentTask, setCurrentTask] = useState<ITask | null>(null);

  const dragOverHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>) => {
    e.preventDefault();
    console.log('dragOverHandler')
  }

  const dragLeaveHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>) => {
    e.preventDefault();
    console.log('dragLeaveHandler')
  }

  const dragStartHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>, column: IColumn, task: ITask) => {
    // e.preventDefault();
    setCurrentColumn(column);
    setCurrentTask(task);
    console.log('dragStartHandler');
    console.log('currentColumn', currentColumn);
    console.log('currentTask', currentTask);

  }

  const dragEndHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>) => {
    e.preventDefault();
    console.log('dragEndHandler', dragEndHandler)
  }

  const dropHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>, column: IColumn, task: ITask) => {
    e.preventDefault();
    console.log('dropHandler', dropHandler)
    console.log('column', column)
    console.log('task', task)
    //удаляем елемент который взяли з прошлой колонки
    //додаем новий елемнт на новую колонку
  }

  const dropTaskHandler = (e: DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    console.log('dropTaskHandler');
    //удаляем елемент который взяли з прошлой колонки
    //додаем новий елемнт на новую колонку
  }

  return (
    <ColumnWrapper>
      <Title>{column?.name}</Title>
      <TasksList
        // onDragOver={(e) => dragOverHandler(e)} 
        onDrop={(e) => dropTaskHandler(e)}
      >
        {
          column?.tasks.length > 0 && column?.tasks.map(task => (
            // @ts-ignore
            <Task
              draggable={true}
              dragOverHandler={dragOverHandler}
              dragLeaveHandler={dragLeaveHandler}
              dragStartHandler={dragStartHandler}
              dragEndHandler={dragEndHandler}
              dropHandler={dropHandler}
              key={task?.id}
              column={column}
              task={task}
            />
          ))
        }
      </TasksList>
    </ColumnWrapper>
  )
}

export default Column;