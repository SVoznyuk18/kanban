import { boardReducer } from './board/boardSlice';
import { boardsReducer } from './boards/boardsSlice'

const rootReducer = {
  board: boardReducer,
  boards: boardsReducer
}

//@ts-ignore
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;