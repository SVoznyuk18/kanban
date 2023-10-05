import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard } from '@/TypesRoot';

export interface IBoartState {
  board: IBoard | {},
  isLoading: boolean,
  errors: string
};

const boardInitialState = {
  board: {},
  isLoading: false,
  errors: ''
};

interface IFailure {
  errorMessage: string
}

const boardSlice = createSlice({
  name: 'board',
  initialState: boardInitialState,
  reducers: {
    boardLoading: (state: IBoartState) => {
      state.isLoading = true;
      state.errors = '';
    },
    boardFailure: (state: IBoartState, { payload }: PayloadAction<IFailure>) => {
      state.errors = payload?.errorMessage;
    },
    getBoardSuccess: (state: IBoartState, { payload }: PayloadAction<{ board: IBoard }>) => {
      state.isLoading = false;
      state.board = payload?.board;
    },
    deleteBoardSuccess: (state: IBoartState) => {
      state.isLoading = false;
      state.board = {}
    }
  }
});

export const boardReducer = boardSlice.reducer;