import { createAction } from "@reduxjs/toolkit";

import { ITask, IAddTaskType, IFailure } from "@/TypesRoot";

export const taskLoadingAction = createAction('tasks/taskLoading');
export const taskFailureAction = createAction('tasks/taskFailure', (error: IFailure) => ({ payload: error }));

export const addNewTaskAction = createAction('ADD_NEW_TASK_ACTION', (task: IAddTaskType) => ({ payload: task }));
export const addNewTaskSuccessAction = createAction('tasks/addNewTaskSuccess', (task: ITask) => ({ payload: task }));

export const getTasksByBoardIdAction = createAction('GET_TASKS_BY_BOARD_ID', (mainBoardId: { mainBoardId: string }) => ({ payload: mainBoardId }));
export const getTasksByBoardIdSuccessAction = createAction('tasks/getTasksByBoardIdSuccess', (tasks: ITask[]) => ({ payload: tasks }));

export const editTaskAction = createAction("EDIT_TASK", (task: Partial<ITask>) => ({ payload: task }));
export const editTaskSuccessAction = createAction("tasks/editTaskSuccess", (task: Partial<ITask>) => ({ payload: task }));

export const deleteTaskAction = createAction("DELETE_TASK", (task: ITask) => ({ payload: task }));
export const deleteTaskActionSuccess = createAction("tasks/deleteTaskSuccess", (task: ITask) => ({ payload: task }));

