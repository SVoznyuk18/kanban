import { createAction } from "@reduxjs/toolkit";
import { IBoard } from '@/TypesRoot';

interface INewBoard {
  boardName: string
  [x: string]: string | undefined;
}

export const addNewBoardsAction = createAction<INewBoard>('ADD_NEW_BOARDS_ACTION');

export const addNewBoardsLoadingAction = createAction('boards/addNewBoardsLoading');

export const addNewBoardsSuccessAction = createAction('boards/addNewBoardsSuccess', (boards: Array<IBoard>) => ({ payload: boards }));

export const addNewBoardsFailureAction = createAction('boards/addNewBoardsFailure', (error: string) => ({ payload: { error } }));

export const getAllBoardsAction = createAction('GET_ALL_BOARDS');

export const getAllBoardsLoadingAction = createAction('boards/getAllBoardsLoading');

export const getAllBoardsSuccessAction = createAction('boards/getAllBoardsSuccess', (boards: Array<IBoard>) => ({ payload: boards }));

export const getAllBoardsFailureAction = createAction('boards/getAllBoardsFailure', (error: string) => ({ payload: { error } }));

export const deletBoardByIdSuccesAction = createAction('boards/deletBoardByIdSucces', (boardId: string) => ({ payload: boardId }));