'use client'
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { useTypedSelector } from '@/UtilsRoot';
import { getBoardAction } from '@/ReduxRoot';
import { IColumn } from '@/TypesRoot';
import { ClassicButton, Column } from "@/ComponentsRoot";
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

  useEffect(() => {
    if (params?.url) dispatch(getBoardAction({ boardUrl: decodeURI }));
  }, [dispatch, params]);

  return (
    <BoardWrapper>
      {/* <h1>{result?.boardName}</h1> */}
      {columns?.length > 0 && columns?.map((column: IColumn) => (
        // @ts-ignore
        <Column key={column?._id} column={column} />
      ))}
      <ClassicButton
        style={{ minWidth: '280px' }}
        width='280px'
        height='100%'
        variant='column'
        onClick={() => console.log('test')}
      >
        + New Column
      </ClassicButton>
    </BoardWrapper>
  )
}

export default Board;