import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  boardsLoadingAction,
  boardsFailureAction,
  addNewBoardsSuccessAction,
  getAllBoardsSuccessAction,
  addNewColumnsAction
} from '@/ReduxRoot';
import { IAddNewBoardType, IResponseBoard, IResponseAllBoards } from '@/TypesRoot';
import { postData, getData } from '@/ApiRoot';

function* workAddNewBoards(action: PayloadAction<IAddNewBoardType>) {
  const { boardName, columns } = action?.payload;

  try {
    yield put(boardsLoadingAction());
    const boardResponse: IResponseBoard | undefined = yield call(postData, '/boards', { boardName });
    const allBoards: IResponseAllBoards = yield call(getData, '/boards');
    yield put(addNewBoardsSuccessAction(allBoards?.result));

    if (boardResponse?.success && columns.length > 0) {
      yield put(addNewColumnsAction({ mainBoardId: boardResponse?.result?._id, columns }))
    } else {
      throw Error()
    }
  } catch (error) {
    yield put(boardsFailureAction({ errorMessage: `Failed to create board ${boardName}` }));
  }
}

function* workGetAllBoards() {
  try {
    yield put(boardsLoadingAction());
    const allBoards: IResponseAllBoards = yield call(getData, '/boards');
    yield put(getAllBoardsSuccessAction(allBoards?.result));
  } catch (error) {
    yield put(boardsFailureAction({ errorMessage: `Failed to fetched boards` }));
  }
}

export function* watchBoards() {
  yield takeLatest('ADD_NEW_BOARDS', workAddNewBoards);
  yield takeLatest('GET_ALL_BOARDS', workGetAllBoards);
}