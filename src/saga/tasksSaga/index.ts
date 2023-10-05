import { call, put, takeLatest } from 'redux-saga/effects'
import { isEmpty } from 'lodash';
import { PayloadAction } from "@reduxjs/toolkit";

import {
  taskLoadingAction,
  taskFailureAction,
  addNewTaskSuccessAction,
  getTasksByBoardIdSuccessAction,
  addNewSubtasksAction
} from '@/ReduxRoot';

import { postData, getDataByParams } from '@/ApiRoot';
import { ITask } from '@/TypesRoot';

interface ITaskPayload {
  taskName: string;
  description: string;
  status: string;
  mainBoardId: string;
  columnId: string;
  subTasks: { [x: string]: string }
}

interface IResponseTask {
  success: boolean;
  result: ITask;
}

interface IResponseAllTasks {
  success: boolean;
  result: ITask[];
}

function* workAddNewTask(action: PayloadAction<ITaskPayload>) {
  const { taskName, description, status, mainBoardId, columnId, subTasks } = action?.payload;
  const subtasksArray = Object.values(subTasks);

  try {
    yield put(taskLoadingAction());
    const { success, result }: IResponseTask = yield call(postData, '/tasks', { taskName, description, status, mainBoardId, columnId });
    if (success) {
      yield put(addNewTaskSuccessAction(result));

      if (!isEmpty(subTasks)) {
        const subtasksConfigure = {
          mainBoardId,
          subTasks: subtasksArray,
          mainTaskId: result?._id
        }
        yield put(addNewSubtasksAction(subtasksConfigure));
      }
    }
  } catch (error) {
    yield put(taskFailureAction({ errorMessage: `Failed add task ${taskName}` }));
  }
}

function* workGetTasksByBoardId(action: PayloadAction<{ mainBoardId: string }>) {
  const { mainBoardId } = action?.payload;
  try {
    yield put(taskLoadingAction());
    const { success, result }: IResponseAllTasks = yield call(getDataByParams, `/tasks`, { mainBoardId });
    if (success) yield put(getTasksByBoardIdSuccessAction(result));
  } catch (error) {
    yield put(taskFailureAction({ errorMessage: `Failed to fetch tasks by mainBoardId ${mainBoardId}` }));
  }
}

export function* watchTasks() {
  yield takeLatest('ADD_NEW_TASK_ACTION', workAddNewTask);
  yield takeLatest('GET_TASKS_BY_BOARD_ID', workGetTasksByBoardId);
}