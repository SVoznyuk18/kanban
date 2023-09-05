import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";

import {
  addNewTaskLoadingAction,
  addNewTaskSuccessAction,
  addNewTaskFailureAction
} from '@/ReduxRoot';

import { postData } from '@/ApiRoot';
import { ITask } from '@/TypesRoot';

interface ITaskPayload {
  taskName: string;
  description: string;
  status: string;
  mainBoardId: string;
  subTasks: {[x: string]: string | undefined}
}

interface IResponseTask {
  success: boolean;
  result: ITask
}

function* workAddNewTask(action: PayloadAction<ITaskPayload>) {
  const {taskName, description, status, mainBoardId, subTasks} = action?.payload;
  try {
    yield put(addNewTaskLoadingAction());
    
    const taskResponse: IResponseTask = yield call(postData, '/tasks', { taskName, description, status, mainBoardId });

    if(taskResponse?.success) {
      yield put(addNewTaskSuccessAction(taskResponse?.result));
    }
    
  } catch(error) {
    yield put(addNewTaskFailureAction(`Failed add task ${taskName}`));
  }
}

export function* watchTasks() {
  yield takeLatest('ADD_NEW_TASK_ACTION', workAddNewTask);
}