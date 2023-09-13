import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  addNewSubtaskLoadingAction,
  addNewSubtaskSuccessAction,
  addNewSubtaskFailureAction,
} from '@/ReduxRoot';

function* workAddNewSubtasks(action: PayloadAction<any>) {
  console.log('action', action);

  try {
    yield put(addNewSubtaskLoadingAction());
    // const {success, result}: IResponseColumns = yield call(postData, '/subtasks', { mainBoardId: boardResponse?.result?._id, columns });
    // if (success) {
    //   yield put(addNewSubtaskSuccessAction(result));
    // }
  } catch (error) {
    yield put(addNewSubtaskFailureAction('Failed to add subtasks'));
  }
}

export function* watchSubtasks() {
  yield takeLatest('ADD_NEW_SUBTASKS', workAddNewSubtasks);
}