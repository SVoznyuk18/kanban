import { call, put, takeEvery } from 'redux-saga/effects'

import { PayloadAction } from "@reduxjs/toolkit";
import { IBoard, IColumn } from '@/TypesRoot';
import { postData, getData } from '@/ApiRoot';

interface IBoardPayload {
  boardName: string,
}

interface IResponse {
  result: IBoard | Array<IColumn> | Array<IBoard>
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

  const allBoards: IResponse = yield call(getData, '/boards');
  console.log('allBoards', allBoards);

}

export function* watchBoard() {
  yield takeEvery('board/setBoardAction', workAddNewBoard)
}