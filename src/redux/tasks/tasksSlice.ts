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
}

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: tasksInitialState,
	reducers: {
		addnewTaskLoading: (state: ITasksState) => {
			state.isLoading = true;
			state.errors = '';
		},
		addNewTaskSuccess: (state: ITasksState, {payload}:PayloadAction<ITask>)	=> {
			state.tasks = [...state.tasks, payload];
			state.isLoading = false;
		},
		addNewTaskError: (state: ITasksState, {payload}: PayloadAction<{error: string}>) => {
			state.isLoading = false;
			state.errors = payload?.error;
		}
	}
});


export const tasksReducer = tasksSlice.reducer;