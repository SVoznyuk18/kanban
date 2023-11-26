import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";

import {
  boardLoadingAction,
  getBoardSuccessAction,
  boardFailureAction,
  getColumnsByBoardIAction,
  getTasksByBoardIdAction,
  getSubtasksByBoardIdAction,
  getAllBoardsAction,
  deleteBoardSuccessAction,
  deletBoardByIdSuccesAction
} from '@/ReduxRoot';
import { IEditBoardType, IResponseBoard } from '@/TypesRoot';
import { getDataByParams, putData, deleteData } from '@/ApiRoot';

function* workGetBoard(action: PayloadAction<{ boardUrl: string }>) {
  const { boardUrl } = action?.payload;

  try {
    yield put(boardLoadingAction());
    const { success, result }: IResponseBoard = yield call(getDataByParams, `/boards/${boardUrl}`, { boardUrl });
    if (success) {
      yield put(getBoardSuccessAction({ board: result }));
      yield put(getColumnsByBoardIAction({ mainBoardId: result?._id }));
      yield put(getTasksByBoardIdAction({ mainBoardId: result?._id }));
      yield put(getSubtasksByBoardIdAction({ mainBoardId: result?._id }));
    }
  } catch (error) {
    yield put(boardFailureAction({ errorMessage: `Failed to fetch board ${boardUrl}` }));
  }
}

function* workerEditBoard(action: PayloadAction<IEditBoardType>) {
  const { boardId, boardName } = action?.payload;

  try {
    yield put(boardLoadingAction());
    const { success, result }: IResponseBoard = yield call(putData, `/boards`, { boardId, boardName });
    if (success) {
      yield put(getBoardSuccessAction({ board: result }));
      yield put(getAllBoardsAction());
    }

  } catch (error) {
    yield put(boardFailureAction({ errorMessage: `Failed to fetch board` }));
  }
}

function* workerDeleteBoard(action: PayloadAction<{ boardId: string }>) {
  const { boardId } = action?.payload;

  try {
    yield put(boardLoadingAction());
    const { success, result }: { success: boolean, result: string } = yield call(deleteData, `/boards`, { boardId });
    if (success) {
      yield put(deleteBoardSuccessAction());
      yield put(deletBoardByIdSuccesAction(boardId));
    }
  } catch (error) {
    yield put(boardFailureAction({ errorMessage: `Failed to delete board` }));
  }
}

export function* watchBoard() {
  yield takeLatest('GET_BOARD', workGetBoard);
  yield takeLatest("EDIT_BOARD", workerEditBoard);
  yield takeLatest("DELETE_BOARD", workerDeleteBoard);
}
