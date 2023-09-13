import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getColumnsByBoardILoadingAction,
  getColumnsByBoardISuccessAction,
  getColumnsByBoardIFailureAction,
} from '@/ReduxRoot';
import { IBoard, IColumn } from '@/TypesRoot';
import { getDataByParams } from '@/ApiRoot';

function* workGetColumns(action: PayloadAction<{ mainBoardId: string }>) {

  const { mainBoardId } = action.payload;
  try {
    yield put(getColumnsByBoardILoadingAction());
    const { success, result } = yield call(getDataByParams, `/columns`, { mainBoardId });
    if (success) {
      yield put(getColumnsByBoardISuccessAction(result));
    }
  } catch (error) {
    yield put(getColumnsByBoardIFailureAction(`Failed to fetch columns by mainBoardId ${mainBoardId}`));
  }
}

export function* watchColumns() {
  yield takeLatest('GET_COLUMNS_BY_BOARD_ID', workGetColumns);
}