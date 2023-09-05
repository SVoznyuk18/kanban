import { boardReducer } from './board/boardSlice';
import { boardsReducer } from './boards/boardsSlice';
import { columsReducer } from './columns/columnsSlice';
import {tasksReducer} from './tasks/tasksSlice';

const rootReducer = {
  board: boardReducer,
  boards: boardsReducer,
  columns: columsReducer,
  tasks: tasksReducer,
}

//@ts-ignore
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;