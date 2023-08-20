import { call, put, takeEvery } from 'redux-saga/effects'


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, IBoartState } from '@/TypesRoot';
import { addNewBoardApiRequest } from '@/ApiRoot';

interface IBoardPayload {
  boardName: string,

}


// const test = async (data): Promise<any> => {
//   const response = await fetch('http://localhost:3000/api/boards', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(data)
//   });
//   const result = await response.json();
//   return result;
// }


function* workSetBoard(action: PayloadAction<IBoardPayload>) {
  const boardName = { boardName: action?.payload?.boardName }
  const result: ReturnType<typeof addNewBoardApiRequest> = yield call(addNewBoardApiRequest, '/boards', boardName)
  console.log('result', result);
}
// const result = yield call(addNewBoardApiRequest, '/boards', { boardName: action?.payload?.boardName })

export function* watchBoard() {
  yield takeEvery('board/setBoardAction', workSetBoard)
}

// function* workSetBoard(action: PayloadAction<IBoardPayload>) {
//   const boardName = { boardName: action?.payload?.boardName }
//   const result = yield call(addNewBoardApiRequest, '/boards', boardName)
//   console.log('result', result);
// }