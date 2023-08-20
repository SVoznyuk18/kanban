import { all, fork } from "redux-saga/effects";

import { watchBoard } from './boardSaga';

const rootSagas = function* () {
  yield all([
    fork(watchBoard),
  ]);
};

export default rootSagas;