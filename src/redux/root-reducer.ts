import { boardReducer } from './board/boardSlice';
import { boardsReducer } from './boards/boardsSlice';
import { columsReducer } from './columns/columnsSlice';

const rootReducer = {
  board: boardReducer,
  boards: boardsReducer,
  columns: columsReducer
}

//@ts-ignore
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;