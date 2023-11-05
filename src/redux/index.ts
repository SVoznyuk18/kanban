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
  taskFailureAction,
  editTaskAction,
  editTaskSuccessAction,
  deleteTaskAction,
  deleteTaskActionSuccess,
} from './tasks/tasks.action';

import {
  addNewSubtasksAction,
  subtaskLoadingAction,
  addNewSubtaskSuccessAction,
  subtaskFailureAction,
  getSubtasksByBoardIdAction,
  getSubtasksByBoardIdSuccessAction,
  editSubtasksAction,
  editSubtasksSuccessAction,
  deleteSubtaskAction,
  deleteSubtaskSuccessAction
} from './subtasks/subtasks.actions';

import { store } from './store';

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
  editTaskAction,
  editTaskSuccessAction,
  deleteTaskAction,
  deleteTaskActionSuccess,

  addNewSubtasksAction,
  subtaskLoadingAction,
  addNewSubtaskSuccessAction,
  subtaskFailureAction,
  editSubtasksAction,
  editSubtasksSuccessAction,
  deleteSubtaskAction,
  deleteSubtaskSuccessAction,

  getSubtasksByBoardIdAction,
  getSubtasksByBoardIdSuccessAction,
};