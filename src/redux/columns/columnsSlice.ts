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
};

interface IFailure {
  errorMessage: string
}

const columnsSlice = createSlice({
  name: 'columns',
  initialState: culumnsInitialState,
  reducers: {
    сolumnsLoading: (state: IColumnsState) => {
      state.isLoading = true;
      state.errors = '';
    },
    columnsFailure: (state: IColumnsState, { payload }: PayloadAction<IFailure>) => {
      state.isLoading = false;
      state.errors = payload?.errorMessage;
    },
    getColumnsByBoardISuccess: (state: IColumnsState, { payload }: PayloadAction<IColumn[]>) => {
      state.isLoading = false;
      state.columns = payload;
    },
    addNewColumnsSuccess: (state: IColumnsState, { payload }: PayloadAction<IColumn[]>) => {
      state.isLoading = false;
      state.columns = [...state.columns, ...payload];
    },
    editColumnsSuccess: (state: IColumnsState, { payload }: PayloadAction<IColumn[]>) => {
      state.isLoading = false;
      state.columns = payload;
    },
  }
});

export const columsReducer = columnsSlice.reducer;