import { call, put, takeEvery } from 'redux-saga/effects'

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, IBoartState, IColumn } from '@/TypesRoot';
import { postData } from '@/ApiRoot';

interface IBoardPayload {
  boardName: string,
}

interface IResponse {
  result: IBoard | Array<IColumn>
  success: boolean
}

function* workAddNewBoard(action: PayloadAction<IBoardPayload>) {
  const { boardName, ...rest } = action?.payload;
  const columns = Object.values(rest);

  const boardResponse: IResponse | undefined = yield call(postData, '/boards', { boardName });

  if (boardResponse?.success && columns.length > 0) {
    //@ts-ignore
    const columnResponse: IResponse = yield call(postData, '/columns', { mainBoardId: boardResponse?.result?._id, columns });
  }

}

export function* watchBoard() {
  yield takeEvery('board/setBoardAction', workAddNewBoard)
}