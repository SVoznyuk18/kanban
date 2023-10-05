import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITask } from "@/TypesRoot";

const tasksInitialState = {
	tasks: [],
	isLoading: false,
	errors: ''
}

interface ITasksState {
	tasks: ITask[];
	isLoading: boolean;
	errors: string
};

interface IFailure {
	errorMessage: string
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: tasksInitialState,
	reducers: {
		taskLoading: (state: ITasksState) => {
			state.isLoading = true;
			state.errors = '';
		},
		addNewTaskSuccess: (state: ITasksState, { payload }: PayloadAction<ITask>) => {
			state.tasks = [...state.tasks, payload];
			state.isLoading = false;
		},
		taskFailure: (state: ITasksState, { payload }: PayloadAction<IFailure>) => {
			state.isLoading = false;
			state.errors = payload?.errorMessage;
		},
		getTasksByBoardIdSuccess: (state: ITasksState, { payload }: PayloadAction<ITask[]>) => {
			state.tasks = payload;
			state.isLoading = false;
		}
	}
});

export const tasksReducer = tasksSlice.reducer;
