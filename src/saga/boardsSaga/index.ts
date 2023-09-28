import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  addNewBoardsLoadingAction,
  addNewBoardsSuccessAction,
  addNewBoardsFailureAction,
  getAllBoardsLoadingAction,
  getAllBoardsSuccessAction,
  getAllBoardsFailureAction,
  addNewColumnsAction
} from '@/ReduxRoot';
import { IBoard } from '@/TypesRoot';
import { postData, getData } from '@/ApiRoot';

interface IResponseBoard {
  result: IBoard,
  success: boolean
}

interface IResponseAllBoards {
  result: Array<IBoard>
  success: boolean
}

function* workAddNewBoards(action: PayloadAction<any>) {
  const { boardName, ...rest } = action?.payload;
  const columns: string[] = Object.values(rest);

  try {
    yield put(addNewBoardsLoadingAction());
    const boardResponse: IResponseBoard | undefined = yield call(postData, '/boards', { boardName });
    const allBoards: IResponseAllBoards = yield call(getData, '/boards');
    yield put(addNewBoardsSuccessAction(allBoards?.result));

    if (boardResponse?.success && columns.length > 0) {
      yield put(addNewColumnsAction({ mainBoardId: boardResponse?.result?._id, columns }))
    } else {
      throw Error()
    }

  } catch (error) {
    yield put(addNewBoardsFailureAction(`Failed to create board ${boardName}`));
  }
}

function* workGetAllBoards() {
  try {
    yield put(getAllBoardsLoadingAction());
    const allBoards: IResponseAllBoards = yield call(getData, '/boards');
    yield put(getAllBoardsSuccessAction(allBoards?.result));
  } catch (error) {
    yield put(getAllBoardsFailureAction(`Failed to fetched boards`));
  }
}

export function* watchBoards() {
  yield takeLatest('ADD_NEW_BOARDS_ACTION', workAddNewBoards);
  yield takeLatest('GET_ALL_BOARDS', workGetAllBoards);
}