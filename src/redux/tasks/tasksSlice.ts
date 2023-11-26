import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITask, IFailure } from "@/TypesRoot";

const tasksInitialState = {
	tasks: [] as ITask[],
	isLoading: false,
	errors: ''
}

interface ITasksState {
	tasks: ITask[];
	isLoading: boolean;
	errors: string
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
		},
		editTaskSuccess: (state: ITasksState, { payload }: PayloadAction<ITask>) => {
			const indexUpdatedTask = state.tasks.findIndex(task => task?._id === payload?._id);
			const newTasks = [...state.tasks];
			newTasks[indexUpdatedTask] = payload;
			state.tasks = newTasks;
			state.isLoading = false;
		},
		deleteTaskSuccess: (state: ITasksState, { payload }: PayloadAction<ITask>) => {
			const newTasks = state.tasks.filter(task => task?._id !== payload?._id);
			state.isLoading = false;
			state.tasks = newTasks;
		},
	}
});

export const tasksReducer = tasksSlice.reducer;
