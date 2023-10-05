import store from "./store";
import {
  getBoardAction,
  boardLoadingAction,
  getBoardSuccessAction,
  boardFailureAction,
  editBoardAction,
  deleteBoardAction,
  deleteBoardSuccessAction,
} from './board/board.action';

import {
  addNewBoardsAction,
  boardsLoadingAction,
  addNewBoardsSuccessAction,
  getAllBoardsAction,
  getAllBoardsSuccessAction,
  boardsFailureAction,
  deletBoardByIdSuccesAction
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
  editColumnsAction,
  editColumnsLoadingAction,
  editColumnsSuccessAction,
  editColumnsFailureAction,
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
  boardLoadingAction,
  getBoardSuccessAction,
  boardFailureAction,
  editBoardAction,
  deleteBoardAction,
  deleteBoardSuccessAction,

  addNewBoardsAction,
  addNewBoardsSuccessAction,
  boardsFailureAction,
  boardsLoadingAction,
  getAllBoardsAction,
  getAllBoardsSuccessAction,
  deletBoardByIdSuccesAction,

  getColumnsByBoardIAction,
  getColumnsByBoardILoadingAction,
  getColumnsByBoardISuccessAction,
  getColumnsByBoardIFailureAction,
  addNewColumnsAction,
  addNewColumnsLoadingAction,
  addNewColumnsSuccessAction,
  addNewColumnsFailureAction,
  editColumnsAction,
  editColumnsLoadingAction,
  editColumnsSuccessAction,
  editColumnsFailureAction,

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