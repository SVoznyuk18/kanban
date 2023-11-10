'use client'
import React, { useEffect, useState, DragEvent } from 'react';
import { useDispatch } from "react-redux";

import { useTypedSelector } from '@/UtilsRoot';
import { getBoardAction, editTaskAction } from '@/ReduxRoot';
import { IColumn, ITask } from '@/TypesRoot';
import { ClassicButton, Column, IColumn } from "@/ComponentsRoot";
import { BoardWrapper } from './Board.styled';

interface IProps {
  params: {
    url: string
  }
}

const Board: React.FC<IProps> = ({ params }) => {
  const dispatch = useDispatch();
  const { columns } = useTypedSelector(state => state?.columns);
  const decodeURI = decodeURIComponent(params?.url);

  const [currentTask, setCurrentTask] = useState<ITask | null>(null);


  const dragStartHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>, column: IColumn, task: ITask) => {
    // e.preventDefault();
    setCurrentTask(task);
  }

  const dropHandler = (e: DragEvent<HTMLUListElement>, column: IColumn) => {
    e.preventDefault();
    if (column?._id !== currentTask?.columnId) {
      const configureTask = { ...currentTask, columnId: column?._id, status: column?.columnName };
      dispatch(editTaskAction(configureTask))
    }
  }

  const dragOverHandler = (e: DragEvent<HTMLUListElement | HTMLLIElement>) => {
    e.preventDefault();
    console.log('test')
  }

  useEffect(() => {
    if (params?.url) dispatch(getBoardAction({ boardUrl: decodeURI }));
  }, [dispatch, params]);


  return (
    <BoardWrapper>
      {/* <h1>{result?.boardName}</h1> */}
      {columns?.length > 0 && columns?.map((column: IColumn) => (
        // @ts-ignore
        <Column key={column?._id} column={column} dragStartHandler={dragStartHandler} dropHandler={dropHandler} dragOverHandler={dragOverHandler} />
      ))}
      <ClassicButton
        style={{ minWidth: '280px' }}
        width='280px'
        height='100%'
        variant='column'
        type='button'
        onClick={() => console.log('test')}
      >
        + New Column
      </ClassicButton>
    </BoardWrapper>
  )
}

export default Board;