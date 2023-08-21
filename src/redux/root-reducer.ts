import { boardReducer } from './boardSlice';
import { boardsReducer } from './boardsSlice'

const rootReducer = {
  board: boardReducer,
  boards: boardsReducer
}

//@ts-ignore
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;