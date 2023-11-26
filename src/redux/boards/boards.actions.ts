import { createAction } from "@reduxjs/toolkit";
import { IBoard, IFailure, IAddNewBoardType } from '@/TypesRoot';

export const boardsLoadingAction = createAction('boards/boardsLoading');
export const boardsFailureAction = createAction('boards/boardsFailure', (error: IFailure) => ({ payload: error }));

export const addNewBoardsAction = createAction('ADD_NEW_BOARDS', (boardData: IAddNewBoardType) => ({ payload: boardData }));
export const addNewBoardsSuccessAction = createAction('boards/addNewBoardsSuccess', (boards: IBoard[]) => ({ payload: boards }));

export const getAllBoardsAction = createAction('GET_ALL_BOARDS');
export const getAllBoardsSuccessAction = createAction('boards/getAllBoardsSuccess', (boards: IBoard[]) => ({ payload: boards }));

export const deletBoardByIdSuccesAction = createAction('boards/deletBoardByIdSucces', (boardId: string) => ({ payload: boardId }));