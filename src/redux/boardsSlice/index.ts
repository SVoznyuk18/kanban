import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard } from '@/TypesRoot';

const boardInitialState = {
  boards: [],
  isLoading: false,
  errors: ''
};

interface IBoardPayload {
  boardName: string,
  [x: string]: string | undefined;
};

interface IBoardsState {
  boards: Array<IBoard>,
  isLoading: boolean,
  errors: string
}

const boardsSlice = createSlice({
  name: 'boards',
  initialState: boardInitialState,
  reducers: {
    addNewBoardsAction: (state: IBoardsState, { payload: boardName }: PayloadAction<IBoardPayload>) => {
      state.isLoading = true;
      state.errors = '';
    },
    addNewBoardsSuccessAction: (state: IBoardsState, { payload }: PayloadAction<Array<IBoard>>) => {
      state.isLoading = false;

      state.boards = payload;
    },
    addNewBoardsFailureAction: (state: IBoardsState, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    }
  }
});

export const { addNewBoardsAction, addNewBoardsSuccessAction, addNewBoardsFailureAction } = boardsSlice.actions;

export const boardsReducer = boardsSlice.reducer;