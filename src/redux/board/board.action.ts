import { createAction } from "@reduxjs/toolkit";
import { IBoard } from '@/TypesRoot';

interface IEditBoardPayload {
  boardName: string;
  boardId: string;
}

interface IFailure {
  errorMessage: string
}


export const boardLoadingAction = createAction('board/boardLoading');
export const boardFailureAction = createAction('board/boardFailure', (error: IFailure) => ({ payload: error }));
export const getBoardAction = createAction('GET_BOARD', (boardUrl: { boardUrl: string }) => ({ payload: boardUrl }));
export const getBoardSuccessAction = createAction('board/getBoardSuccess', (board: { board: IBoard }) => ({ payload: board }));

export const editBoardAction = createAction("EDIT_BOARD", (editBoardConfigure: { editBoardConfigure: IEditBoardPayload }) => ({ payload: editBoardConfigure }));

export const deleteBoardAction = createAction("DELETE_BOARD", (boardId: { boardId: string }) => ({ payload: boardId }));
export const deleteBoardSuccessAction = createAction("board/deleteBoardSuccess");