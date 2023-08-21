import { all, fork } from "redux-saga/effects";

import { watchBoard } from './boardSaga';
import { watchBoards } from './boardsSaga';

const rootSagas = function* () {
  yield all([
    fork(watchBoard),
    fork(watchBoards),
  ]);
};

export default rootSagas;