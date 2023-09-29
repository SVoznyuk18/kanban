import store from "./store";
import {
  getBoardAction,
  getBoardLoadingAction,
  getBoardSuccessAction,
  getBoardFailureAction,
  editBoardAction
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
  getColumnsByBoardIFailureAction,
  addNewColumnsAction,
  addNewColumnsLoadingAction,
  addNewColumnsSuccessAction,
  addNewColumnsFailureAction,
  editColumnsAction
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
  addNewSubtaskFailureAction,
  getSubtasksByBoardIdAction,
  getSubtasksByBoardIdLoadingAction,
  getSubtasksByBoardIdSuccessAction,
  getSubtasksByBoardIdFailureAction
} from './subtasks/subtasks.actions';

import RootState from './root-reducer';

export {
  store,

  getBoardAction,
  getBoardLoadingAction,
  getBoardSuccessAction,
  getBoardFailureAction,
  editBoardAction,

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
  addNewColumnsAction,
  addNewColumnsLoadingAction,
  addNewColumnsSuccessAction,
  addNewColumnsFailureAction,
  editColumnsAction,

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

  getSubtasksByBoardIdAction,
  getSubtasksByBoardIdLoadingAction,
  getSubtasksByBoardIdSuccessAction,
  getSubtasksByBoardIdFailureAction,

  RootState
};