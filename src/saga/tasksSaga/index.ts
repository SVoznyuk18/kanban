import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";

import {
  addNewTaskLoadingAction,
  addNewTaskSuccessAction,
  addNewTaskFailureAction,
  getTasksByBoardIdLoadingAction,
  getTasksByBoardIdSuccessAction,
  getTasksByBoardIdFailureAction
} from '@/ReduxRoot';

import { postData, getDataByParams } from '@/ApiRoot';
import { ITask } from '@/TypesRoot';

interface ITaskPayload {
  taskName: string;
  description: string;
  status: string;
  mainBoardId: string;
  subTasks: { [x: string]: string | undefined }
}

interface IResponseTask {
  success: boolean;
  result: ITask;
}

interface IResponseTasks {
  success: boolean;
  result: ITask[];
}

function* workAddNewTask(action: PayloadAction<ITaskPayload>) {
  const { taskName, description, status, mainBoardId, subTasks } = action?.payload;
  try {
    yield put(addNewTaskLoadingAction());

    const taskResponse: IResponseTask = yield call(postData, '/tasks', { taskName, description, status, mainBoardId });

    if (taskResponse?.success) {
      yield put(addNewTaskSuccessAction(taskResponse?.result));
    }

  } catch (error) {
    yield put(addNewTaskFailureAction(`Failed add task ${taskName}`));
  }
}

function* workGetTasksByBoardId(action: PayloadAction<{ mainBoardId: string }>) {
  const { mainBoardId } = action?.payload;
  try {
    yield put(getTasksByBoardIdLoadingAction());
    const { success, result }: IResponseTasks = yield call(getDataByParams, `/tasks`, { mainBoardId });
    if (success) yield put(getTasksByBoardIdSuccessAction(result));
  } catch (error) {
    yield put(getTasksByBoardIdFailureAction(`Failed to fetch tasks by mainBoardId ${mainBoardId}`));
  }
}

export function* watchTasks() {
  yield takeLatest('ADD_NEW_TASK_ACTION', workAddNewTask);
  yield takeLatest('GET_TASKS_BY_BOARD_ID', workGetTasksByBoardId);
}