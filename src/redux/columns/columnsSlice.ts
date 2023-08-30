import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IColumn } from "@/TypesRoot";

const culumnsInitialState = {
  columns: [],
  isLoading: false,
  errors: ''
};

interface IColumnsState {
  columns: IColumn[],
  isLoading: boolean,
  errors: string
}


const columnsSlice = createSlice({
  name: 'columns',
  initialState: culumnsInitialState,
  reducers: {
    getColumnsLoading: (state: IColumnsState) => {
      state.isLoading = true;
      state.errors = '';
    },
    getColumnsSuccess: (state: IColumnsState, { payload }: PayloadAction<IColumn[]>) => {
      state.isLoading = false;
      state.columns = payload;
    },
    getColumnsFailure: (state: IColumnsState, { payload }: PayloadAction<{ error: string }>) => {
      state.isLoading = false;
      state.errors = payload?.error;
    }
  }
});

export const columsReducer = columnsSlice.reducer;