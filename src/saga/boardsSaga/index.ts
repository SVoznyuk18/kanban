import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  addNewBoardsLoadingAction,
  addNewBoardsSuccessAction,
  addNewBoardsFailureAction,
  getAllBoardsLoading,
  getAllBoardsSuccess,
  getAllBoardsFailure
} from '@/ReduxRoot';
import { IBoard, IColumn } from '@/TypesRoot';
import { postData, getData } from '@/ApiRoot';

interface IResponseBoard {
  result: IBoard,
  success: boolean
}

interface IResponseAllBoards {
  result: Array<IBoard>
  success: boolean
}

interface IResponseColumns {
  result: Array<IColumn>
  success: boolean
}

function* workAddNewBoards(action: PayloadAction<any>) {
  const { boardName, ...rest } = action?.payload;
  const columns = Object.values(rest);

  try {
    yield put(addNewBoardsLoadingAction());

    const boardResponse: IResponseBoard | undefined = yield call(postData, '/boards', { boardName });
    const allBoards: IResponseAllBoards = yield call(getData, '/boards');

    yield put(addNewBoardsSuccessAction(allBoards?.result));

    if (boardResponse?.success && columns.length > 0) {
      const columnResponse: IResponseColumns = yield call(postData, '/columns', { mainBoardId: boardResponse?.result?._id, columns });
    } else {
      throw Error()
    }

  } catch (error) {
    yield put(addNewBoardsFailureAction(`Failed to create board ${boardName}`));
  }
}

function* workGetAllBoards(action: PayloadAction<Array<IBoard>>) {
  try {
    yield put(getAllBoardsLoading());
    const allBoards: IResponseAllBoards = yield call(getData, '/boards');
    yield put(getAllBoardsSuccess(allBoards?.result));
  } catch (error) {
    yield put(getAllBoardsFailure(`Failed to fetched boards`));
  }
}

export function* watchBoards() {
  yield takeEvery('ADD_NEW_BOARDS_ACTION', workAddNewBoards),
    yield takeLatest('GET_ALL_BOARDS', workGetAllBoards);
}