import { createAction } from "@reduxjs/toolkit";

import { IColumn } from "@/TypesRoot";

type ColumnsPayload = { mainBoardId: string };

export const getColumnsByBoardIAction = createAction('GET_COLUMNS_BY_BOARD_ID', <T>(mainBoardId: T) => ({ payload: mainBoardId }));

export const getColumnsByBoardILoadingAction = createAction('columns/getColumnsByBoardILoading');

export const getColumnsByBoardISuccessAction = createAction('columns/getColumnsByBoardISuccess', (columns: IColumn[]) => ({ payload: columns }));

export const getColumnsByBoardIFailureAction = createAction('columns/getColumnsByBoardIFailure', (error: string) => ({ payload: error }));