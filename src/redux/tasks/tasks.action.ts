import { createAction } from "@reduxjs/toolkit";

import { ITask } from "@/TypesRoot";

export const addNewTaskAction = createAction('ADD_NEW_TASK_ACTION', <T>(task: T) => ({ payload: task }));

export const addNewTaskLoadingAction = createAction('tasks/addnewTaskLoading');

export const addNewTaskSuccessAction = createAction('tasks/addNewTaskSuccess', (task: ITask) => ({ payload: task }));

export const addNewTaskFailureAction = createAction('tasks/addNewTaskError', (error: string) => ({ payload: error }));

export const getTasksByBoardIdAction = createAction('GET_TASKS_BY_BOARD_ID', <T>(mainBoardId: T) => ({ payload: mainBoardId }));

export const getTasksByBoardIdLoadingAction = createAction('tasks/getTasksByBoardIdLoading');

export const getTasksByBoardIdSuccessAction = createAction('tasks/getTasksByBoardIdSuccess', (tasks: ITask[]) => ({ payload: tasks }));

export const getTasksByBoardIdFailureAction = createAction('tasks/getTasksByBoardIdFailure', (error: string) => ({ payload: error }));
