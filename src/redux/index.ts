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
  columnsLoadingAction,
  getColumnsByBoardISuccessAction,
  columnsFailureAction,
  addNewColumnsAction,
  addNewColumnsSuccessAction,
  editColumnsAction,
  editColumnsSuccessAction,
} from './columns/columns.action';

import {
  addNewTaskAction,
  taskLoadingAction,
  addNewTaskSuccessAction,
  getTasksByBoardIdAction,
  getTasksByBoardIdSuccessAction,
  taskFailureAction
} from './tasks/tasks.action';

import {
  addNewSubtasksAction,
  subtaskLoadingAction,
  addNewSubtaskSuccessAction,
  subtaskFailureAction,
  getSubtasksByBoardIdAction,
  getSubtasksByBoardIdSuccessAction,
} from './subtasks/subtasks.actions';

import { RootState, store } from './store';

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
  columnsLoadingAction,
  getColumnsByBoardISuccessAction,
  columnsFailureAction,
  addNewColumnsAction,
  addNewColumnsSuccessAction,
  editColumnsAction,
  editColumnsSuccessAction,

  addNewTaskAction,
  taskLoadingAction,
  addNewTaskSuccessAction,

  getTasksByBoardIdAction,
  getTasksByBoardIdSuccessAction,
  taskFailureAction,

  addNewSubtasksAction,
  subtaskLoadingAction,
  addNewSubtaskSuccessAction,
  subtaskFailureAction,

  getSubtasksByBoardIdAction,
  getSubtasksByBoardIdSuccessAction,
  // @ts-ignore
  RootState
};