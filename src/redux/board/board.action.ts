import { createAction } from "@reduxjs/toolkit";
import { IBoard } from '@/TypesRoot';

type BoardUrlPayload = {
  boardUrl: string;
};

interface IEditBoardPayload {
  boardName: string;
  boardId: string;
}

export const getBoardAction = createAction<BoardUrlPayload>('GET_BOARD');

export const getBoardLoadingAction = createAction('board/getBoardLoading');

export const getBoardSuccessAction = createAction('board/getBoardSuccess', (board: IBoard) => ({ payload: board }));

export const getBoardFailureAction = createAction('board/getBoardFailure', (error: string) => ({ payload: error }));

export const editBoardAction = createAction("EDIT_BOARD", (boardPayload: IEditBoardPayload) => ({ payload: boardPayload }));