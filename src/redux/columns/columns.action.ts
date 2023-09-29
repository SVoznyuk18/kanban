import { createAction } from "@reduxjs/toolkit";

import { IColumn } from "@/TypesRoot";

type ColumnsPayload = { mainBoardId: string };

interface IEditColumnsPayload {
  boardId: string;
  columns: { [x: string]: string | undefined };
}

export const getColumnsByBoardIAction = createAction('GET_COLUMNS_BY_BOARD_ID', <T>(mainBoardId: T) => ({ payload: mainBoardId }));

export const getColumnsByBoardILoadingAction = createAction('columns/getColumnsByBoardILoading');

export const getColumnsByBoardISuccessAction = createAction('columns/getColumnsByBoardISuccess', (columns: IColumn[]) => ({ payload: columns }));

export const getColumnsByBoardIFailureAction = createAction('columns/getColumnsByBoardIFailure', (error: string) => ({ payload: error }));

export const addNewColumnsAction = createAction("ADD_NEW_COLUMNS", (columns: { mainBoardId: string, columns: string[] }) => ({ payload: columns }));

export const addNewColumnsLoadingAction = createAction("columns/addNewColumnsLoading");

export const addNewColumnsSuccessAction = createAction("columns/addNewColumnsSuccess", (columns: IColumn[]) => ({ payload: columns }));

export const addNewColumnsFailureAction = createAction("columns/addNewColumnsFailure", (error: string) => ({ payload: error }));

export const editColumnsAction = createAction("EDIT_COLUMNS", (editColumnPayload: IEditColumnsPayload) => ({ payload: editColumnPayload }));
