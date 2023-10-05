import { createAction } from "@reduxjs/toolkit";
import { IBoard } from '@/TypesRoot';

interface INewBoard {
  boardName: string
  [x: string]: string;
}

interface IFailure {
  errorMessage: string
}

export const boardsLoadingAction = createAction('boards/boardsLoading');
export const boardsFailureAction = createAction('boards/boardsFailure', (error: IFailure) => ({ payload: error }));

export const addNewBoardsAction = createAction('ADD_NEW_BOARDS', (boardData: INewBoard) => ({ payload: boardData }));
export const addNewBoardsSuccessAction = createAction('boards/addNewBoardsSuccess', (boards: IBoard[]) => ({ payload: boards }));

export const getAllBoardsAction = createAction('GET_ALL_BOARDS');
export const getAllBoardsSuccessAction = createAction('boards/getAllBoardsSuccess', (boards: IBoard[]) => ({ payload: boards }));

export const deletBoardByIdSuccesAction = createAction('boards/deletBoardByIdSucces', (boardId: string) => ({ payload: boardId }));