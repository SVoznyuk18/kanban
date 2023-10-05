import { boardReducer } from './board/boardSlice';
import { boardsReducer } from './boards/boardsSlice';
import { columsReducer } from './columns/columnsSlice';
import { tasksReducer } from './tasks/tasksSlice';
import { subtasksReducer } from './subtasks/subtasksSlice'

const rootReducer = {
  board: boardReducer,
  boards: boardsReducer,
  columns: columsReducer,
  tasks: tasksReducer,
  subtasks: subtasksReducer,
}

export default rootReducer;