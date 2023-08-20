import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, IBoartState } from '@/TypesRoot';

const boardInitialState = {
  board: null,
  isLoading: false,
  errors: ''
};

interface IBoardPayload {
  boardName: string,
  [x: string]: string | undefined;

}

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