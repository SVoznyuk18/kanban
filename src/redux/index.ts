import store from "./store";
import {
  getBoardAction,
  getBoardLoadingAction,
  getBoardSuccessAction,
  getBoardFailureAction
} from './board/board.action';

import {
  addNewBoardsAction,
  addNewBoardsLoadingAction,
  addNewBoardsSuccessAction,
  addNewBoardsFailureAction,
  getAllBoardsAction,
  getAllBoardsLoadingAction,
  getAllBoardsSuccessAction,
  getAllBoardsFailureAction
} from './boards/boards.actions';

import {
  getColumnsByBoardIAction,
  getColumnsByBoardILoadingAction,
  getColumnsByBoardISuccessAction,
  getColumnsByBoardIFailureAction
} from './columns/columns.action';

import {
  addNewTaskAction,
  addNewTaskLoadingAction,
  addNewTaskSuccessAction,
  addNewTaskFailureAction,
  getTasksByBoardIdAction,
  getTasksByBoardIdLoadingAction,
  getTasksByBoardIdSuccessAction,
  getTasksByBoardIdFailureAction
} from './tasks/tasks.action';

import {
  addNewSubtasksAction,
  addNewSubtaskLoadingAction,
  addNewSubtaskSuccessAction,
  addNewSubtaskFailureAction
} from './subtasks/subtasks.actions';

import RootState from './root-reducer';

export {
  store,

  getBoardAction,
  getBoardLoadingAction,
  getBoardSuccessAction,
  getBoardFailureAction,

  addNewBoardsAction,
  addNewBoardsSuccessAction,
  addNewBoardsFailureAction,
  addNewBoardsLoadingAction,

  getAllBoardsAction,
  getAllBoardsLoadingAction,
  getAllBoardsSuccessAction,
  getAllBoardsFailureAction,

  getColumnsByBoardIAction,
  getColumnsByBoardILoadingAction,
  getColumnsByBoardISuccessAction,
  getColumnsByBoardIFailureAction,

  addNewTaskAction,
  addNewTaskLoadingAction,
  addNewTaskSuccessAction,
  addNewTaskFailureAction,

  getTasksByBoardIdAction,
  getTasksByBoardIdLoadingAction,
  getTasksByBoardIdSuccessAction,
  getTasksByBoardIdFailureAction,

  addNewSubtasksAction,
  addNewSubtaskLoadingAction,
  addNewSubtaskSuccessAction,
  addNewSubtaskFailureAction,

  RootState
};