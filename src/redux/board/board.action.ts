import { createAction } from "@reduxjs/toolkit";
import { IBoard } from '@/TypesRoot';

export const getBoardAction = createAction('GET_BOARD', (boardUrl: string) => ({ payload: { boardUrl } }));

export const getBoardLoadingAction = createAction('board/getBoardLoading');

export const getBoardSuccessAction = createAction('board/getBoardSuccess', (board: IBoard) => ({ payload: board }));

export const getBoardFailureAction = createAction('board/getBoardFailure', (error: string) => ({ payload: error }));