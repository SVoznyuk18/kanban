import { all, fork } from "redux-saga/effects";

import { watchBoard } from './boardSaga';
import { watchBoards } from './boardsSaga';
import { watchColumns } from './columnsSaga';
import { watchTasks } from "./tasksSaga";
import { watchSubtasks } from "./subtasksSaga";

const rootSagas = function* () {
  yield all([
    fork(watchBoard),
    fork(watchBoards),
    fork(watchColumns),
    fork(watchTasks),
    fork(watchSubtasks),
  ]);
};

export default rootSagas;
