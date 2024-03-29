import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, IFailure } from '@/TypesRoot';

const boardsInitialState = {
  boards: [] as IBoard[],
  isLoading: false,
  errors: ''
};

interface IBoardsState {
  boards: IBoard[],
  isLoading: boolean,
  errors: string
}

const boardsSlice = createSlice({
  name: 'boards',
  initialState: boardsInitialState,
  reducers: {
    boardsLoading: (state: IBoardsState) => {
      state.isLoading = true;
      state.errors = '';
    },
    boardsFailure: (state: IBoardsState, { payload }: PayloadAction<IFailure>) => {
      state.isLoading = false;
      state.errors = payload?.errorMessage;
    },
    addNewBoardsSuccess: (state: IBoardsState, { payload }: PayloadAction<IBoard[]>) => {
      state.isLoading = false;
      state.boards = payload;
    },
    getAllBoardsSuccess: (state: IBoardsState, { payload }: PayloadAction<IBoard[]>) => {
      state.isLoading = false;
      state.boards = payload;
    },
    deletBoardByIdSucces: (state: IBoardsState, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      const deletedBoardId = payload;
      const filteredBoards = state.boards.filter(board => board?._id !== deletedBoardId);
      state.boards = filteredBoards;
    },
  }
});

export const boardsReducer = boardsSlice.reducer;