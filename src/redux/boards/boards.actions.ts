import { createAction } from "@reduxjs/toolkit";
import { IBoard } from '@/TypesRoot';

export const addNewBoardsAction = createAction<any>('ADD_NEW_BOARDS_ACTION');

export const addNewBoardLoadingAction = createAction('boards/addNewBoardsLoading');

export const addNewBoardsSuccessAction = createAction('boards/addNewBoardsSuccess', (boards: Array<IBoard>) => ({ payload: boards }));

export const addNewBoardsFailureAction = createAction('boards/addNewBoardsFailure', (error: string) => ({ payload: { error } }));
