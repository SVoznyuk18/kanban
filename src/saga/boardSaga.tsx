import { call, put, takeEvery } from 'redux-saga/effects'


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, IBoartState } from '@/TypesRoot';
import { postData } from '@/ApiRoot';

interface IBoardPayload {
  boardName: string,
}


function* workSetBoard(action: PayloadAction<IBoardPayload>) {
  const { boardName } = action?.payload;
  const result: ReturnType<typeof postData> = yield call(postData, '/boards', { boardName })
  console.log('result', result);
}
// const result = yield call(addNewBoardApiRequest, '/boards', { boardName: action?.payload?.boardName })

export function* watchBoard() {
  yield takeEvery('board/setBoardAction', workSetBoard)
}