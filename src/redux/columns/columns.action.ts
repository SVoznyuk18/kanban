import { createAction } from "@reduxjs/toolkit";

import { IColumn } from "@/TypesRoot";

type ColumnsPayload = { mainBoardId: string };

export const getColumnsAction = createAction<ColumnsPayload>('GET_COLUMNS');

export const getColumnsLoadingAction = createAction('columns/getColumnsLoading');

export const getColumnsSuccessAction = createAction('columns/getColumnsSuccess', (columns: IColumn[]) => ({ payload: columns }));

export const getColumnsFailureAction = createAction('columns/getColumnsFailure', (error: string) => ({ payload: error }));