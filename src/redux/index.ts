import store from "./store";
import { setBoardAction, setBoardSuccessAction, setBoardFailureAction } from './boardSlice';
import { addNewBoardsAction, addNewBoardsLoadingAction, addNewBoardsSuccessAction, addNewBoardsFailureAction } from './boards/boards.actions';
import RootState from './root-reducer';

export { store, setBoardAction, setBoardSuccessAction, setBoardFailureAction, addNewBoardsAction, addNewBoardsSuccessAction, addNewBoardsFailureAction, addNewBoardsLoadingAction, RootState };