import { call, put, takeLatest, select } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import {
  subtaskLoadingAction,
  addNewSubtaskSuccessAction,
  subtaskFailureAction,
  getSubtasksByBoardIdSuccessAction,
  editSubtasksSuccessAction,
  deleteSubtaskSuccessAction
} from '@/ReduxRoot';

import { postData, getDataByParams, patchData, deleteData } from '@/ApiRoot';

import { ISubtask } from '@/TypesRoot';

interface ISubtasksPayload {
  mainBoardId: string;
  mainTaskId: string;
  subtasks?: ISubtask[];
}

interface IResponseSubtasks {
  success: boolean;
  result: ISubtask[];
}

function* workAddNewSubtasks(action: PayloadAction<ISubtasksPayload>) {
  try {
    yield put(subtaskLoadingAction());
    const { success, result }: IResponseSubtasks = yield call(postData, '/subtasks', { ...action?.payload });
    if (success) {
      yield put(addNewSubtaskSuccessAction(result));
    }
  } catch (error) {
    yield put(subtaskFailureAction({ errorMessage: 'Failed to add subtasks' }));
  }
}

function* workGetSubtasks(action: PayloadAction<{ mainBoardId: string }>) {
  const { mainBoardId } = action.payload;
  try {
    yield put(subtaskLoadingAction());
    const { success, result } = yield call(getDataByParams, `/subtasks`, { mainBoardId });
    if (success) {
      yield put(getSubtasksByBoardIdSuccessAction(result))
    }
  } catch (error) {
    yield put(subtaskFailureAction({ errorMessage: `Failed to fetch subrasks by mainBoardId ${mainBoardId}` }));
  }
}

function* workEditSubtasks(action: PayloadAction<ISubtask[]>) {
  try {
    yield put(subtaskLoadingAction());
    const { success, result }: IResponseSubtasks = yield call(patchData, `/subtasks`, action.payload);
    if (success) {
      yield put(editSubtasksSuccessAction(result))
    }
  } catch (error) {
    yield put(subtaskFailureAction({ errorMessage: `Failed to PATCH subtasks` }));
  }
}

function* workDeleteSubtasks(action: PayloadAction<ISubtask[]>) {
  const deletedSubtask = action.payload;
  try {
    yield put(subtaskLoadingAction());
    const { success, result }: IResponseSubtasks = yield call(deleteData, `/subtasks`, deletedSubtask);
    if (success) {
      yield put(deleteSubtaskSuccessAction(result))
    }
  } catch (error) {
    yield put(subtaskFailureAction({ errorMessage: `Failed to DELETE subtasks` }));
  }
}

export function* watchSubtasks() {
  yield takeLatest('ADD_NEW_SUBTASKS', workAddNewSubtasks);
  yield takeLatest('GET_SUBTASKS_BY_BOARD_ID', workGetSubtasks);
  yield takeLatest('EDIT_SUBTASKS', workEditSubtasks);
  yield takeLatest('DELETE_SUBTASKS', workDeleteSubtasks);
}