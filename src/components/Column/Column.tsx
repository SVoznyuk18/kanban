'use client'
import React, { useState, DragEvent } from 'react';

import { useDispatch } from "react-redux";

import { editTaskAction } from '@/ReduxRoot';
import { ITask, IColumn } from '@/TypesRoot';
import { useTypedSelector } from '@/UtilsRoot';
import { Task } from '@/ComponentsRoot'

import { ColumnWrapper, Title, TasksList } from './Column.styled';

interface IColumnProps {
  column: IColumn
}

const Column: React.FC<IColumnProps> = ({ column, dragStartHandler, dropHandler, dragOverHandler }) => {
  const dispatch = useDispatch();
  const { tasks } = useTypedSelector(state => state?.tasks);
  const { subtasks } = useTypedSelector(state => state?.subtasks);

  // const [currentColumn, setCurrentColumn] = useState<IColumn | null>(null);
  // const [currentTask, setCurrentTask] = useState<ITask | null>(null);

  // console.log(currentTask)


  const filteredTasksByColumnStatus: ITask[] = tasks.filter((task: ITask) => task?.status === column?.columnName);

  // const dragOverHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>) => {
  //   e.preventDefault();
  // }

  // const dragLeaveHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>) => {
  //   e.preventDefault();
  //   console.log('dragLeaveHandler')
  // }

  // const dragStartHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>, column: IColumn, task: ITask) => {
  //   // e.preventDefault();
  //   // setCurrentColumn(column);
  //   console.log('task', task)
  //   setCurrentTask(task);
  //   // console.log('dragStartHandler', task)
  //   // console.log('dragStartHandler');
  //   // console.log('currentColumn', currentColumn);
  //   // console.log('currentTask', currentTask);
  // }

  // const dragEndHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>) => {
  //   e.preventDefault();
  //   console.log('dragEndHandler', dragEndHandler)
  // }

  // const dropHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>, column: IColumn, task: ITask) => {
  //   e.preventDefault();
  //   console.log('dropHandler', dropHandler)
  //   console.log('column', column)
  //   console.log('task', task)
  //   //удаляем елемент который взяли з прошлой колонки
  //   //додаем новий елемнт на новую колонку
  // }

  // const dropHandler = (e: DragEvent<HTMLUListElement>, column: IColumn, currentTask) => {
  //   e.preventDefault();
  //   console.log('dropTaskHandler', column);
  //   console.log('currentTask', currentTask);

  //   // const configureTask = { ...task, status };
  //   // const 
  //   // dispatch(editTaskAction(configureTask))
  //   //удаляем елемент который взяли з прошлой колонки
  //   //додаем новий елемнт на новую колонку
  // }

  return (
    <ColumnWrapper>
      <Title>{column?.columnName} ({filteredTasksByColumnStatus.length})</Title>
      <TasksList
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, column)}
      >
        {
          filteredTasksByColumnStatus.length > 0 && filteredTasksByColumnStatus.map(task => (
            // @ts-ignore
            <Task
              draggable={true}
              dragOverHandler={dragOverHandler}
              // dragLeaveHandler={dragLeaveHandler}
              dragStartHandler={dragStartHandler}
              // dragEndHandler={dragEndHandler}
              // dropHandler={dropHandler}
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

export default Column;