import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";

import {
  addNewTaskLoadingAction,
  addNewTaskSuccessAction,
  addNewTaskFailureAction
} from '@/ReduxRoot';


interface ITaskPayload {
  taskName: string;
  description: string;
  status: string;
  // mainColumnId: string;
  // mainBoardId: string;
  subTasks: {[x: string]: string | undefined}
}

function* workAddNewTask(action: PayloadAction<ITaskPayload>) {
  const {taskName, description, status, subTasks} = action?.payload;
  try {
    yield put(addNewTaskLoadingAction());

  } catch(error) {
    yield put(addNewTaskFailureAction(`Failed add task ${taskName}`));
  }
 
}

export function* watchTasks() {
  yield takeLatest('ADD_NEW_TASK_ACTION', workAddNewTask);
}