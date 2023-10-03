import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getBoardLoadingAction,
  getBoardSuccessAction,
  getBoardFailureAction,
  getColumnsByBoardIAction,
  getTasksByBoardIdAction,
  getSubtasksByBoardIdAction,
  getAllBoardsAction,
  deleteBoardLoadingAction,
  deleteBoardSuccessAction,
  deleteBoardFailureAction,
  deletBoardByIdSuccesAction
} from '@/ReduxRoot';
import { IBoard } from '@/TypesRoot';
import { getDataByParams, putData, deleteData } from '@/ApiRoot';

interface IBoardPayload {
  boardUrl: string,
}
interface IResponseBoard {
  result: IBoard,
  success: boolean
}
interface IEditBoardPayload {
  boardName: string;
  boardId: string;
}

function* workGetBoard(action: PayloadAction<IBoardPayload>) {
  const { boardUrl } = action?.payload;

  try {
    yield put(getBoardLoadingAction());
    const { success, result }: IResponseBoard = yield call(getDataByParams, `/boards/${boardUrl}`, { boardUrl });
    if (success) {
      yield put(getBoardSuccessAction(result));
      yield put(getColumnsByBoardIAction({ mainBoardId: result?._id }));
      yield put(getTasksByBoardIdAction({ mainBoardId: result?._id }));
      yield put(getSubtasksByBoardIdAction({ mainBoardId: result?._id }));
    }
  } catch (error) {
    yield put(getBoardFailureAction(`Failed to fetch board ${boardUrl}`));
  }
}

function* workerEditBoard(action: PayloadAction<IEditBoardPayload>) {
  try {
    yield put(getBoardLoadingAction());
    const { success, result }: IResponseBoard = yield call(putData, `/boards`, { ...action?.payload });
    if (success) {
      yield put(getBoardSuccessAction(result));
      yield put(getAllBoardsAction());
    }

  } catch (error) {
    yield put(getBoardFailureAction(`Failed to fetch board`));
  }
}

function* workerDeleteBoard(action: PayloadAction<string>) {
  const boardId = action?.payload;
  try {
    yield put(deleteBoardLoadingAction());
    const { success, result }: { success: boolean, result: string } = yield call(deleteData, `/boards/${boardId}`, boardId);
    if (success) {
      yield put(deleteBoardSuccessAction());
      yield put(deletBoardByIdSuccesAction(boardId));
    }
  } catch (error) {
    yield put(deleteBoardFailureAction(`Failed to delete board`));
  }
}

export function* watchBoard() {
  yield takeLatest('GET_BOARD', workGetBoard);
  yield takeLatest("EDIT_BOARD", workerEditBoard);
  yield takeLatest("DELETE_BOARD", workerDeleteBoard);
}
