import { createAction } from "@reduxjs/toolkit";

import { ITask, ISubtask } from "@/TypesRoot";

interface IFailure {
  errorMessage: string
}

interface IAddTaskPayload {
  taskName: string;
  description: string;
  status: string;
  mainBoardId: string;
  columnId: string;
  subtasks?: Partial<ISubtask>[];
}

export const taskLoadingAction = createAction('tasks/taskLoading');
export const taskFailureAction = createAction('tasks/taskFailure', (error: IFailure) => ({ payload: error }));

export const addNewTaskAction = createAction('ADD_NEW_TASK_ACTION', (task: IAddTaskPayload) => ({ payload: task }));
export const addNewTaskSuccessAction = createAction('tasks/addNewTaskSuccess', (task: ITask) => ({ payload: task }));

export const getTasksByBoardIdAction = createAction('GET_TASKS_BY_BOARD_ID', (mainBoardId: { mainBoardId: string }) => ({ payload: mainBoardId }));
export const getTasksByBoardIdSuccessAction = createAction('tasks/getTasksByBoardIdSuccess', (tasks: ITask[]) => ({ payload: tasks }));

export const editTaskAction = createAction("EDIT_TASK", (task: Partial<ITask>) => ({ payload: task }));
export const editTaskSuccessAction = createAction("tasks/editTaskSuccess", (task: Partial<ITask>) => ({ payload: task }));


