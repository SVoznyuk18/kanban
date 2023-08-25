'use client'
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { getBoardAction } from '@/ReduxRoot';
import { BoardWrapper } from './Board.styled';

interface IProps {
  params: {
    url: string
  }
}

const Board: React.FC<IProps> = ({ params }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    if (params?.url) dispatch(getBoardAction(params?.url));

  }, [dispatch, params])

  return (
    <BoardWrapper>
      <h1>Hello</h1>
      {/* <h1>{result?.boardName}</h1> */}
      {/* {board?.columns.length > 0 && board?.columns.map((column) => (
        // @ts-ignore
        <Column key={column?.id} column={column} />
      ))} */}

    </BoardWrapper>
  )
}

export default Board;