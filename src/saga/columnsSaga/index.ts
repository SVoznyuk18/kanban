import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  columnsLoadingAction,
  columnsFailureAction,
  getColumnsByBoardISuccessAction,
  addNewColumnsSuccessAction,
  editColumnsSuccessAction,
  getTasksByBoardIdAction
} from '@/ReduxRoot';
import { IColumn, IEditColumnsType, IAddNewColumnsType, IResponseColumns } from '@/TypesRoot';
import { getDataByParams, postData, putData } from '@/ApiRoot';

function* workGetColumns(action: PayloadAction<{ mainBoardId: string }>) {
  const { mainBoardId } = action.payload;
  try {
    yield put(columnsLoadingAction());
    const { success, result } = yield call(getDataByParams, `/columns`, { mainBoardId });
    if (success) {
      yield put(getColumnsByBoardISuccessAction(result));
    }
  } catch (error) {
    yield put(columnsFailureAction({ errorMessage: `Failed to fetch columns by mainBoardId ${mainBoardId}` }));
  }
}

function* workAddNewColumns(action: PayloadAction<IAddNewColumnsType>) {
  const { mainBoardId, columns } = action.payload;

  try {
    yield put(columnsLoadingAction());
    const { result, success }: IResponseColumns = yield call(postData, '/columns', { mainBoardId, columns });
    if (success) yield put(addNewColumnsSuccessAction(result));
  } catch (error) {
    yield put(columnsFailureAction({ errorMessage: `Failed to create New columns to mainBoardId ${mainBoardId}` }));
  }
}

function* workEditColumns(action: PayloadAction<IEditColumnsType>) {
  const { boardId, columns, deletedColumns } = action.payload;

  yield put(columnsLoadingAction());
  try {
    const { result, success }: IResponseColumns = yield call(putData, `/columns`, { boardId, columns, deletedColumns });
    if (success) {
      yield put(editColumnsSuccessAction(result));

      /////////
      yield put(getTasksByBoardIdAction({ mainBoardId: boardId })); //get tasks aster apdate columns  
      ///////////
    }

  } catch (error) {
    yield put(columnsFailureAction({ errorMessage: `failed to edit columns` }));
  }
}

export function* watchColumns() {
  yield takeLatest('GET_COLUMNS_BY_BOARD_ID', workGetColumns);
  yield takeLatest("ADD_NEW_COLUMNS", workAddNewColumns);
  yield takeLatest("EDIT_COLUMNS", workEditColumns);
}