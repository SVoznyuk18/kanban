import { call, put, takeEvery } from 'redux-saga/effects'


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, IBoartState } from '@/TypesRoot';

interface IBoardPayload {
  boardName: string,

}


const test = async (data): Promise<any> => {
  const response = await fetch('http://localhost:3000/api/boards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  return result;
}


function* workSetBoard(action: PayloadAction<IBoardPayload>) {
  const result: ReturnType<typeof test> = yield call(test, { boardName: action?.payload?.boardName })
  console.log('result', result);
}

export function* watchBoard() {
  yield takeEvery('board/setBoardAction', workSetBoard)
}