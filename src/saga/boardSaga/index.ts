import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getBoardLoadingAction,
  getBoardSuccessAction,
  getBoardFailureAction,
  getColumnsByBoardIAction,
  getTasksByBoardIdAction,
  getSubtasksByBoardIdAction,
  getAllBoardsAction
} from '@/ReduxRoot';
import { IBoard } from '@/TypesRoot';
import { getDataByParams, putData } from '@/ApiRoot';
import { error } from 'console';

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
  columnsName: { [x: string]: string | undefined };
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
  const boardConfigure = {
    boardId: action?.payload?.boardId,
    boardName: action?.payload?.boardName,
  }
  try {
    yield put(getBoardLoadingAction());
    const { success, result }: IResponseBoard = yield call(putData, `/boards`, { ...boardConfigure });
    if (success) {
      yield put(getBoardSuccessAction(result));
      yield put(getAllBoardsAction());
    }

  } catch (error) {
    yield put(getBoardFailureAction(`Failed to fetch board`));
  }
}

export function* watchBoard() {
  yield takeLatest('GET_BOARD', workGetBoard)
  yield takeLatest("EDIT_BOARD", workerEditBoard);
}