import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ISubtask } from "@/TypesRoot";

const subtasksInitialState = {
  subtasks: [],
  isLoading: false,
  errors: ''
};

interface ISubtasksState {
  subtasks: ISubtask[];
  isLoading: boolean;
  errors: string;
}

const subtasksSlice = createSlice({
  name: 'subtasks',
  initialState: subtasksInitialState,
  reducers: {
    addNewSubtaskLoading: (state: ISubtasksState) => {
      state.isLoading = true;
      state.errors = '';
    },
    addNewSubtaskSuccess: (state: ISubtasksState, { payload }: PayloadAction<ISubtask[]>) => {
      state.isLoading = false;
      state.subtasks = [...state.subtasks, ...payload];
    },
    addNewSubtaskFailure: (state: ISubtasksState, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = payload;
    },
    getAllSubtasksByBoardIdLoading: (state: ISubtasksState) => {
      state.isLoading = true;
      state.errors = '';
    },
    getAllSubtasksByBoardIdSuccess: (state: ISubtasksState, { payload }: PayloadAction<ISubtask[]>) => {
      state.isLoading = false;
      state.subtasks = payload;
    },
    getAllSubtasksByBoardIdFailure: (state: ISubtasksState, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = payload;
    }
  }
});

export const subtasksReducer = subtasksSlice.reducer;