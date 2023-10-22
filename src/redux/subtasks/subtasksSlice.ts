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
    subtaskFailure: (state: ISubtasksState, { payload }: PayloadAction<IFailure>) => {
      state.isLoading = false;
      state.errors = payload?.errorMessage;
    },
    addNewSubtaskSuccess: (state: ISubtasksState, { payload }: PayloadAction<ISubtask[]>) => {
      state.isLoading = false;
      state.subtasks = [...state.subtasks, ...payload];
    },
    getSubtasksByBoardIdSuccess: (state: ISubtasksState, { payload }: PayloadAction<ISubtask[]>) => {
      state.isLoading = false;
      state.subtasks = payload;
    },
    editSubtasksSuccess: (state: ISubtasksState, { payload }: PayloadAction<ISubtask[]>) => {
      const newSubtasks = state.subtasks;
      const dictionaryUpdatedSubtasks: { [key: string]: ISubtask } = {};
      payload.forEach(subtask => { dictionaryUpdatedSubtasks[subtask?._id] = subtask });

      newSubtasks.forEach((subtask, index) => {
        const updatedSubtask = dictionaryUpdatedSubtasks[subtask?._id];
        if (updatedSubtask) newSubtasks[index] = updatedSubtask;
      });

      state.isLoading = false;
      state.subtasks = newSubtasks;
    }
  }
});

export const subtasksReducer = subtasksSlice.reducer;
