'use client'
import React from 'react';

import { IBoard } from '@/TypesRoot';
import { Column } from '@/ComponentsRoot'
import { BoardWrapper } from './Board.styled';

interface IBoardProps {
  board: IBoard
}

const Board: React.FC<IBoardProps> = ({ board }) => {
  return (
    <BoardWrapper>
      {board?.columns.length > 0 && board?.columns.map((column) => (
        // @ts-ignore
        <Column key={column?.id} column={column} />
      ))}

    </BoardWrapper>
  )
}

export default Board;