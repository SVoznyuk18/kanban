'use client'
import React from 'react';

import { Column } from '@/ComponentsRoot'
import { BoardWrapper } from './Board.styled';

interface ISubtask extends Document {
  title: string,
  isCompleted: boolean,
  timestamps: boolean
}

interface ITask extends Document {
  title: string,
  description: string,
  status: string,
  subtasks: Array<ISubtask>
}

interface IColumn extends Document {
  name: string,
  id: string,
  tasks: Array<ITask>
}

interface IBoard extends Document {
  name: string,
  columns: Array<IColumn>,
}

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