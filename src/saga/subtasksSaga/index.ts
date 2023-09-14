import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  addNewSubtaskLoadingAction,
  addNewSubtaskSuccessAction,
  addNewSubtaskFailureAction,
  getSubtasksByBoardIdLoadingAction,
  getSubtasksByBoardIdSuccessAction,
  getSubtasksByBoardIdFailureAction,
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

function* workGetSubtasks(action: PayloadAction<{ mainBoardId: string }>) {
  const { mainBoardId } = action.payload;
  try {
    yield put(getSubtasksByBoardIdLoadingAction());
    const { success, result } = yield call(getDataByParams, `/subtasks`, { mainBoardId });
    if (success) {
      yield put(getSubtasksByBoardIdSuccessAction(result))
    }
  } catch (error) {
    yield put(getSubtasksByBoardIdFailureAction(`Failed to fetch subrasks by mainBoardId ${mainBoardId}`));
  }
}

export function* watchSubtasks() {
  yield takeLatest('ADD_NEW_SUBTASKS', workAddNewSubtasks);
  yield takeLatest('GET_SUBTASKS_BY_BOARD_ID', workGetSubtasks)
}