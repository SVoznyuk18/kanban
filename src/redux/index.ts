import store from "./store";
import { setBoardAction, setBoardSuccessAction, setBoardFailureAction } from './boardSlice';
import { addNewBoardsAction, addNewBoardsSuccessAction, addNewBoardsFailureAction } from './boardsSlice';
import RootState from './root-reducer';

export { store, setBoardAction, setBoardSuccessAction, setBoardFailureAction, addNewBoardsAction, addNewBoardsSuccessAction, addNewBoardsFailureAction, RootState };