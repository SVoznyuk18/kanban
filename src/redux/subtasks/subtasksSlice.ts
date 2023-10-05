import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ISubtask } from "@/TypesRoot";

const subtasksInitialState = {
  subtasks: [] as ISubtask[],
  isLoading: false,
  errors: ''
};

interface ISubtasksState {
  subtasks: ISubtask[];
  isLoading: boolean;
  errors: string;
};

interface IFailure {
  errorMessage: string
};


const subtasksSlice = createSlice({
  name: 'subtasks',
  initialState: subtasksInitialState,
  reducers: {
    subtaskLoading: (state: ISubtasksState) => {
      state.isLoading = true;
      state.errors = '';
    },
    addNewSubtaskSuccess: (state: ISubtasksState, { payload }: PayloadAction<ISubtask[]>) => {
      state.isLoading = false;
      state.subtasks = [...state.subtasks, ...payload];
    },
    subtaskFailure: (state: ISubtasksState, { payload }: PayloadAction<IFailure>) => {
      state.isLoading = false;
      state.errors = payload?.errorMessage;
    },
    getSubtasksByBoardIdSuccess: (state: ISubtasksState, { payload }: PayloadAction<ISubtask[]>) => {
      state.isLoading = false;
      state.subtasks = payload;
    }
  }
});

export const subtasksReducer = subtasksSlice.reducer;