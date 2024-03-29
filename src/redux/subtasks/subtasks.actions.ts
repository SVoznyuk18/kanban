import { createAction } from "@reduxjs/toolkit";

import { ISubtask, IAddSubtasksType, IFailure } from "@/TypesRoot";

export const subtaskLoadingAction = createAction('subtasks/subtaskLoading');
export const subtaskFailureAction = createAction('subtasks/subtaskFailure', (error: IFailure) => ({ payload: error }));

export const addNewSubtasksAction = createAction('ADD_NEW_SUBTASKS', (subtasks: IAddSubtasksType) => ({ payload: subtasks }));
export const addNewSubtaskSuccessAction = createAction('subtasks/addNewSubtaskSuccess', (subtasks: ISubtask[]) => ({ payload: subtasks }));

export const getSubtasksByBoardIdAction = createAction('GET_SUBTASKS_BY_BOARD_ID', (mainBoardId: { mainBoardId: string }) => ({ payload: mainBoardId }));
export const getSubtasksByBoardIdSuccessAction = createAction('subtasks/getSubtasksByBoardIdSuccess', (subtasks: ISubtask[]) => ({ payload: subtasks }));

export const editSubtasksAction = createAction("EDIT_SUBTASKS", (subtasks: ISubtask[]) => ({ payload: subtasks }));
export const editSubtasksSuccessAction = createAction('subtasks/editSubtasksSuccess', (subtasks: ISubtask[]) => ({ payload: subtasks }));

export const deleteSubtaskAction = createAction("DELETE_SUBTASKS", (subtasks: ISubtask[]) => ({ payload: subtasks }));
export const deleteSubtaskSuccessAction = createAction("subtasks/deleteSubtaskSuccess", (subtasks: ISubtask[]) => ({ payload: subtasks }));
