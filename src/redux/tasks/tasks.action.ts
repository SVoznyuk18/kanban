import { createAction } from "@reduxjs/toolkit";

import { ITask } from "@/TypesRoot";

interface IFailure {
  errorMessage: string
}

export const taskLoadingAction = createAction('tasks/taskLoading');
export const taskFailureAction = createAction('tasks/taskFailure', (error: IFailure) => ({ payload: error }));

export const addNewTaskAction = createAction('ADD_NEW_TASK_ACTION', <T>(task: T) => ({ payload: task }));
export const addNewTaskSuccessAction = createAction('tasks/addNewTaskSuccess', (task: ITask) => ({ payload: task }));

export const getTasksByBoardIdAction = createAction('GET_TASKS_BY_BOARD_ID', <T>(mainBoardId: T) => ({ payload: mainBoardId }));
export const getTasksByBoardIdSuccessAction = createAction('tasks/getTasksByBoardIdSuccess', (tasks: ITask[]) => ({ payload: tasks }));
