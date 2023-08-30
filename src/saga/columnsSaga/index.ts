import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getColumnsLoadingAction,
  getColumnsSuccessAction,
  getColumnsFailureAction,
} from '@/ReduxRoot';
import { IBoard, IColumn } from '@/TypesRoot';
import { getDataByParams } from '@/ApiRoot';

function* workGetColumns(action: { payload: { mainBoardId: string }, type: string }) {

  const { mainBoardId } = action.payload;
  try {
    yield put(getColumnsLoadingAction());
    const { success, result } = yield call(getDataByParams, `/columns`, { mainBoardId });
    if (success) {
      yield put(getColumnsSuccessAction(result));
    }
  } catch (error) {
    yield put(getColumnsFailureAction(`Failed to fetch columns by mainBoardId ${mainBoardId}`));
  }
}

export function* watchColumns() {
  yield takeLatest('GET_COLUMNS', workGetColumns);
}