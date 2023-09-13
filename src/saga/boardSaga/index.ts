import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getBoardLoadingAction,
  getBoardSuccessAction,
  getBoardFailureAction,
  getColumnsByBoardIAction,
  getTasksByBoardIdAction
} from '@/ReduxRoot';
import { IBoard } from '@/TypesRoot';
import { getDataByParams } from '@/ApiRoot';

interface IBoardPayload {
  boardUrl: string,
}
interface IResponseBoard {
  result: IBoard,
  success: boolean
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
    }
  } catch (error) {
    yield put(getBoardFailureAction(`Failed to fetch board ${boardUrl}`));
  }
}

export function* watchBoard() {
  yield takeLatest('GET_BOARD', workGetBoard)
}