import { call, put, takeEvery } from 'redux-saga/effects'

import { PayloadAction } from "@reduxjs/toolkit";
import { addNewBoardsSuccessAction, addNewBoardsFailureAction } from '@/ReduxRoot';
import { IBoard, IColumn } from '@/TypesRoot';
import { postData, getData } from '@/ApiRoot';

interface IBoardPayload {
  boardName: string,
}

interface IResponse {
  result: IBoard | Array<IColumn> | Array<IBoard>
  success: boolean
}

function* workAddNewBoards(action: PayloadAction<IBoardPayload>) {
  const { boardName, ...rest } = action?.payload;
  const columns = Object.values(rest);

  try {
    const boardResponse: IResponse | undefined = yield call(postData, '/boards', { boardName });
    const allBoards: IResponse = yield call(getData, '/boards');
    //@ts-ignore
    yield put(addNewBoardsSuccessAction(allBoards?.result));

    if (boardResponse?.success && columns.length > 0) {
      //@ts-ignore
      const columnResponse: IResponse = yield call(postData, '/columns', { mainBoardId: boardResponse?.result?._id, columns });
    } else {
      throw Error()
    }

  } catch (error) {
    yield put(addNewBoardsFailureAction(`Failed to create board ${boardName}`));
  }
}

export function* watchBoards() {
  yield takeEvery('boards/addNewBoardsAction', workAddNewBoards)
}