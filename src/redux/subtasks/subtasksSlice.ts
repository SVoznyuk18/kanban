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
    addSubtaskLoading: (state: ISubtasksState) => {
      state.isLoading = true;
      state.errors = '';
    },
    addSubtaskSuccess: (state: ISubtasksState, { payload }: PayloadAction<ISubtask[]>) => {
      state.isLoading = false;
      state.subtasks = [...state.subtasks, ...payload];
    },
    addSubtaskFailure: (state: ISubtasksState, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = payload;
    }
  }
});

export const subtasksReducer = subtasksSlice.reducer;