import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard } from '@/TypesRoot';

const boardInitialState = {
  boards: [],
  isLoading: false,
  errors: ''
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
    addNewBoardsLoading: (state: IBoardsState) => {
      state.isLoading = true;
      state.errors = '';
    },
    addNewBoardsSuccess: (state: IBoardsState, { payload }: PayloadAction<Array<IBoard>>) => {
      state.isLoading = false;
      state.boards = payload;
    },
    addNewBoardsFailure: (state: IBoardsState, { payload }: PayloadAction<{ error: string }>) => {
      state.isLoading = false;
      state.errors = payload?.error;
    },
    getAllBoardsLoading: (state: IBoardsState) => {
      state.isLoading = true;
      state.errors = '';
    },
    getAllBoardsSuccess: (state: IBoardsState, { payload }: PayloadAction<Array<IBoard>>) => {
      state.isLoading = false;
      state.boards = payload;
    },
    getAllBoardsFailure: (state: IBoardsState, { payload }: PayloadAction<{ error: string }>) => {
      state.isLoading = false;
      state.errors = payload?.error;
    },
  }
});

export const boardsReducer = boardsSlice.reducer;