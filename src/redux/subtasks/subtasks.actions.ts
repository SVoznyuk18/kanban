import { createAction } from "@reduxjs/toolkit";

import { ISubtask } from "@/TypesRoot";

export const addNewSubtasksAction = createAction('ADD_NEW_SUBTASKS', <T>(subtasks: T) => ({ payload: subtasks }));

export const addNewSubtaskLoadingAction = createAction('subtasks/addNewSubtaskLoading');

export const addNewSubtaskSuccessAction = createAction('subtasks/addNewSubtaskSuccess', (subTasks: ISubtask[]) => ({ payload: subTasks }));

export const addNewSubtaskFailureAction = createAction('subtasks/addNewSubtaskFailure', (error: string) => ({ payload: error }));

