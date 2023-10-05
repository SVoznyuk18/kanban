import { createAction } from "@reduxjs/toolkit";

import { IColumn } from "@/TypesRoot";

interface IEditColumnsPayload {
  boardId: string;
  columns: { [x: string]: string | undefined };
  deletedColumnsId: string[] | undefined;
}

interface IFailure {
  errorMessage: string
}

export const columnsLoadingAction = createAction('columns/сolumnsLoading');
export const columnsFailureAction = createAction('columns/columnsFailure', (error: IFailure) => ({ payload: error }));

export const getColumnsByBoardIAction = createAction('GET_COLUMNS_BY_BOARD_ID', <T>(mainBoardId: T) => ({ payload: mainBoardId }));
export const getColumnsByBoardISuccessAction = createAction('columns/getColumnsByBoardISuccess', (columns: IColumn[]) => ({ payload: columns }));

export const addNewColumnsAction = createAction("ADD_NEW_COLUMNS", (columns: { mainBoardId: string, columns: string[] }) => ({ payload: columns }));
export const addNewColumnsSuccessAction = createAction("columns/addNewColumnsSuccess", (columns: IColumn[]) => ({ payload: columns }));

export const editColumnsAction = createAction("EDIT_COLUMNS", (editColumnPayload: IEditColumnsPayload) => ({ payload: editColumnPayload }));
export const editColumnsSuccessAction = createAction('columns/editColumnsSuccess', (columns: IColumn[]) => ({ payload: columns }));
