import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getBoardLoadingAction,
  getBoardSuccessAction,
  getBoardFailureAction
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
    const { success, result }: IResponseBoard = yield call(getDataByParams, `/boards/${boardUrl}`, boardUrl);
    if (success) yield put(getBoardSuccessAction(result));

  } catch (error) {
    console.log('error')
    yield put(getBoardFailureAction(`Failed to fetch board ${boardUrl}`));
  }
}

export function* watchBoard() {
  yield takeLatest('GET_BOARD', workGetBoard)
}