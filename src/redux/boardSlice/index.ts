import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard } from '@/TypesRoot';

export interface IBoartState {
  board: IBoard | null,
  isLoading: boolean,
  errors: string
};

interface IBoardPayload {
  boardName: string,
  [x: string]: string | undefined;
};

const boardInitialState = {
  board: null,
  isLoading: false,
  errors: ''
};

const boardSlice = createSlice({
  name: 'board',
  initialState: boardInitialState,
  reducers: {
    setBoardAction: (state: IBoartState, { payload: boardName }: PayloadAction<IBoardPayload>) => {
      state.isLoading = true;
      state.errors = '';
    },
    setBoardSuccessAction: (state: IBoartState, { payload: board }: PayloadAction<IBoard>) => {
      state.isLoading = false;
      state.board = board
    },
    setBoardFailureAction: (state: IBoartState, { payload: error }: PayloadAction<string>) => {
      state.errors = error;
    }
  }
});

export const { setBoardAction, setBoardSuccessAction, setBoardFailureAction } = boardSlice.actions;

export const boardReducer = boardSlice.reducer;