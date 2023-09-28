import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getColumnsByBoardILoadingAction,
  getColumnsByBoardISuccessAction,
  getColumnsByBoardIFailureAction,
  addNewColumnsLoadingAction,
  addNewColumnsSuccessAction,
  addNewColumnsFailureAction
} from '@/ReduxRoot';
import { IBoard, IColumn } from '@/TypesRoot';
import { getDataByParams, postData } from '@/ApiRoot';

interface IResponseColumns {
  result: Array<IColumn>
  success: boolean
}

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

function* workAddNewColumns(action: PayloadAction<{ mainBoardId: string; columns: string[] }>) {
  const { mainBoardId, columns } = action.payload;
  try {
    yield put(addNewColumnsLoadingAction());
    const { result, success }: IResponseColumns = yield call(postData, '/column', { mainBoardId, columns });
    if (success) yield put(addNewColumnsSuccessAction(result));
  } catch (error) {
    yield put(addNewColumnsFailureAction(`Failed to create New columns to mainBoardId ${mainBoardId}`));
  }
}

export function* watchColumns() {
  yield takeLatest('GET_COLUMNS_BY_BOARD_ID', workGetColumns);
  yield takeLatest("ADD_NEW_COLUMNS", workAddNewColumns);
}