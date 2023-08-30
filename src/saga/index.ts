import { all, fork } from "redux-saga/effects";

import { watchBoard } from './boardSaga';
import { watchBoards } from './boardsSaga';
import { watchColumns } from './columnsSaga';

const rootSagas = function* () {
  yield all([
    fork(watchBoard),
    fork(watchBoards),
    fork(watchColumns),
  ]);
};

export default rootSagas;
