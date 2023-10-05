import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  boardsLoadingAction,
  boardsFailureAction,
  addNewBoardsSuccessAction,
  getAllBoardsSuccessAction,
  addNewColumnsAction
} from '@/ReduxRoot';
import { IBoard } from '@/TypesRoot';
import { postData, getData } from '@/ApiRoot';

interface INewBoard {
  boardName: string
  [x: string]: string;
}

interface IResponseBoard {
  result: IBoard,
  success: boolean
}

interface IResponseAllBoards {
  result: Array<IBoard>
  success: boolean
}

function* workAddNewBoards(action: PayloadAction<INewBoard>) {
  const { boardName, ...rest } = action?.payload;
  const columns: string[] = Object.values(rest);

  try {
    yield put(boardsLoadingAction());
    const boardResponse: IResponseBoard | undefined = yield call(postData, '/boards', { boardName });
    const allBoards: IResponseAllBoards = yield call(getData, '/boards');
    yield put(addNewBoardsSuccessAction(allBoards?.result));

    if (boardResponse?.success && columns.length > 0) {
      yield put(addNewColumnsAction({ mainBoardId: boardResponse?.result?._id, columns }))
    } else {
      throw Error()
    }
  } catch (error) {
    yield put(boardsFailureAction({ errorMessage: `Failed to create board ${boardName}` }));
  }
}

function* workGetAllBoards() {
  try {
    yield put(boardsLoadingAction());
    const allBoards: IResponseAllBoards = yield call(getData, '/boards');
    yield put(getAllBoardsSuccessAction(allBoards?.result));
  } catch (error) {
    yield put(boardsFailureAction({ errorMessage: `Failed to fetched boards` }));
  }
}

export function* watchBoards() {
  yield takeLatest('ADD_NEW_BOARDS', workAddNewBoards);
  yield takeLatest('GET_ALL_BOARDS', workGetAllBoards);
}