import { createAction } from "@reduxjs/toolkit";

import { ITask } from "@/TypesRoot";

export const addNewTask = createAction('ADD_NEW_TASK');

export const addNewTaskLoading = createAction('tasks/addnewTaskLoading');

export const addNewTaskSuccess = createAction('tasks/addNewTaskSuccess', (task: ITask) => ({payload: task}));

export const addNewTaskFailure = createAction('task/addNewTaskError', (error: string) => ({payload: error}));

