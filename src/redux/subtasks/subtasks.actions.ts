import { createAction } from "@reduxjs/toolkit";

import { ISubtask } from "@/TypesRoot";

interface ISubtasksPayload {
  mainBoardId: string;
  mainTaskId: string;
  subTasks: string[];
};

interface IFailure {
  errorMessage: string
}

export const subtaskLoadingAction = createAction('subtasks/subtaskLoading');
export const subtaskFailureAction = createAction('subtasks/subtaskFailure', (error: IFailure) => ({ payload: error }));

export const addNewSubtasksAction = createAction('ADD_NEW_SUBTASKS', (subtasks: ISubtasksPayload) => ({ payload: subtasks }));
export const addNewSubtaskSuccessAction = createAction('subtasks/addNewSubtaskSuccess', (subTasks: ISubtask[]) => ({ payload: subTasks }));

export const getSubtasksByBoardIdAction = createAction('GET_SUBTASKS_BY_BOARD_ID', (mainBoardId: { mainBoardId: string }) => ({ payload: mainBoardId }));
export const getSubtasksByBoardIdSuccessAction = createAction('subtasks/getSubtasksByBoardIdSuccess', (subTasks: ISubtask[]) => ({ payload: subTasks }));
