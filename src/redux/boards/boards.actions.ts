import { createAction } from "@reduxjs/toolkit";
import { IBoard } from '@/TypesRoot';

export const addNewBoardsAction = createAction<any>('ADD_NEW_BOARDS_ACTION');

export const addNewBoardsLoadingAction = createAction('boards/addNewBoardsLoading');

export const addNewBoardsSuccessAction = createAction('boards/addNewBoardsSuccess', (boards: Array<IBoard>) => ({ payload: boards }));

export const addNewBoardsFailureAction = createAction('boards/addNewBoardsFailure', (error: string) => ({ payload: { error } }));

export const getAllBoards = createAction<any>('GET_ALL_BOARDS');

export const getAllBoardsLoading = createAction('boards/getAllBoardsLoading');

export const getAllBoardsSuccess = createAction('boards/getAllBoardsSuccess', (boards: Array<IBoard>) => ({ payload: boards }));

export const getAllBoardsFailure = createAction('boards/getAllBoardsFailure', (error: string) => ({ payload: { error } }));