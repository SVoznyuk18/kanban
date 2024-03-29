'use client'
import React, { useEffect, useState, useCallback, memo, useContext } from 'react';
import { useDispatch } from "react-redux";
import { ModalContext } from '@/LibRoot';
import { useTypedSelector } from '@/UtilsRoot';
import { getBoardAction, editTaskAction } from '@/ReduxRoot';
import { IColumn, ITask, TDragStartHandler, TDropHandler, TDragOverHandler } from '@/TypesRoot';
import { ClassicButton, Column, SkeletonLoader } from "@/ComponentsRoot";
import { BoardWrapper } from './Board.styled';

interface IProps {
  params: {
    url: string
  }
}

const Board: React.FC<IProps> = ({ params }) => {
  const dispatch = useDispatch();
  const { handleOpenModal } = useContext(ModalContext);
  const { columns, isLoading } = useTypedSelector(state => state?.columns);
  const decodeURI = decodeURIComponent(params?.url);

  const [currentTask, setCurrentTask] = useState<ITask | null>(null);
  const [targetColumnId, setTargetColumnId] = useState('')

  const dragStartHandler: TDragStartHandler = useCallback((e, task) => {
    setCurrentTask(task);
  }, []);

  const dropHandler: TDropHandler = useCallback((e, column) => {
    e.preventDefault();
    setTargetColumnId('')
    if (column?._id !== currentTask?.columnId) {
      const configureTask = { ...currentTask, columnId: column?._id, status: column?.columnName };
      dispatch(editTaskAction(configureTask))
    }
  }, [currentTask, dispatch]);

  const dragOverHandler: TDragOverHandler = useCallback((e, column) => {
    e.preventDefault();
    setTargetColumnId(column?._id)
  }, []) as TDragOverHandler;

  useEffect(() => {
    if (params?.url) dispatch(getBoardAction({ boardUrl: decodeURI }));
  }, [decodeURI, dispatch, params]);

  return (
    <BoardWrapper>
      {
        isLoading && <SkeletonLoader count={2} variants="column" />
      }
      {columns?.length > 0 && columns?.map((column: IColumn) => (
        <Column
          key={column?._id}
          column={column}
          dragStartHandler={dragStartHandler}
          dropHandler={dropHandler}
          dragOverHandler={dragOverHandler}
          targetColumnId={targetColumnId}
        />
      ))}
      <ClassicButton
        style={{ minWidth: '280px' }}
        width='280px'
        height='100%'
        variant='column'
        type='button'
        onClick={() => handleOpenModal("AddNewColumn")}
      >
        + New Column
      </ClassicButton>
    </BoardWrapper>
  )
}

export default memo(Board);