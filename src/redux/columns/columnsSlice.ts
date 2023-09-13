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
    getColumnsByBoardILoading: (state: IColumnsState) => {
      state.isLoading = true;
      state.errors = '';
    },
    getColumnsByBoardISuccess: (state: IColumnsState, { payload }: PayloadAction<IColumn[]>) => {
      state.isLoading = false;
      state.columns = payload;
    },
    getColumnsByBoardIFailure: (state: IColumnsState, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = payload;
    }
  }
});

export const columsReducer = columnsSlice.reducer;