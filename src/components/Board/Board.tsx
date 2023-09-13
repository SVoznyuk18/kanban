'use client'
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";



import { useTypedSelector } from '@/UtilsRoot';
import { getBoardAction } from '@/ReduxRoot';
import { IColumn } from '@/TypesRoot';

import { BoardWrapper } from './Board.styled';

import { Column } from '@/ComponentsRoot';

interface IProps {
  params: {
    url: string
  }
}

const Board: React.FC<IProps> = ({ params }) => {

  const dispatch = useDispatch();

  const columns = useTypedSelector(state => state?.columns?.columns);
  const tasks = useTypedSelector(state => state?.tasks?.tasks);

  console.log('tasks', tasks)
  useEffect(() => {
    if (params?.url) dispatch(getBoardAction({ boardUrl: params?.url }));

  }, [dispatch, params]);


  return (
    <BoardWrapper>
      <h1>Hello</h1>
      {/* <h1>{result?.boardName}</h1> */}
      {columns?.length > 0 && columns?.map((column: IColumn) => (
        // @ts-ignore
        <Column key={column?._id} column={column} />
      ))}

    </BoardWrapper>
  )
}

export default Board;