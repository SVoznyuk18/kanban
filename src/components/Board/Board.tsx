'use client'
import React from 'react';

import { getDataByParams } from '@/ApiRoot';

import { IBoard } from '@/TypesRoot';
import { Column } from '@/ComponentsRoot'
import { BoardWrapper } from './Board.styled';

interface IProps {
  params: {
    url: string
  }
}

const Board: React.FC<IProps> = ({ params }) => {
  const result = await getDataByParams(`http://localhost:3000/api/boards/${params?.url}`, params?.url) as IBoard;

  return (
    <BoardWrapper>
      <h1>{result?.boardName}</h1>
      {/* {board?.columns.length > 0 && board?.columns.map((column) => (
        // @ts-ignore
        <Column key={column?.id} column={column} />
      ))} */}

    </BoardWrapper>
  )
}

export default Board;