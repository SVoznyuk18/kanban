import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  addNewSubtaskLoadingAction,
  addNewSubtaskSuccessAction,
  addNewSubtaskFailureAction,
} from '@/ReduxRoot';

import { postData, getDataByParams } from '@/ApiRoot';

import { ISubtask } from '@/TypesRoot';

interface ISubtasksPayload {
  mainBoardId: string;
  mainTaskId: string;
  subTasks: string[];
}

interface IResponseSubtasks {
  success: boolean;
  result: ISubtask[];
}

function* workAddNewSubtasks(action: PayloadAction<ISubtasksPayload>) {
  try {
    yield put(addNewSubtaskLoadingAction());
    const { success, result }: IResponseSubtasks = yield call(postData, '/subtasks', { ...action?.payload });
    if (success) {
      yield put(addNewSubtaskSuccessAction(result));
    }
  } catch (error) {
    yield put(addNewSubtaskFailureAction('Failed to add subtasks'));
  }
}

export function* watchSubtasks() {
  yield takeLatest('ADD_NEW_SUBTASKS', workAddNewSubtasks);
}