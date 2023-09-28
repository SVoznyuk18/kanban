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

const boardSlice = createSlice({
  name: 'board',
  initialState: boardInitialState,
  reducers: {
    getBoardLoading: (state: IBoartState) => {
      state.isLoading = true;
      state.errors = '';
    },
    getBoardSuccess: (state: IBoartState, { payload: board }: PayloadAction<IBoard>) => {
      state.isLoading = false;
      state.board = board
    },
    getBoardFailure: (state: IBoartState, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    }
  }
});

export const boardReducer = boardSlice.reducer;