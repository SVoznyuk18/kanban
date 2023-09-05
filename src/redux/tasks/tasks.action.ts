import { createAction } from "@reduxjs/toolkit";

import { ITask } from "@/TypesRoot";

export const addNewTaskAction = createAction('ADD_NEW_TASK_ACTION', <T>(task: T) => ({payload: task}));

export const addNewTaskLoadingAction = createAction('tasks/addnewTaskLoading');

export const addNewTaskSuccessAction = createAction('tasks/addNewTaskSuccessAction', (task: ITask) => ({payload: task}));

export const addNewTaskFailureAction = createAction('task/addNewTaskError', (error: string) => ({payload: error}));

