import { boardReducer } from './boardSlice';
import { IBoard, IBoartState } from '@/TypesRoot';


const rootReducer = {
  board: boardReducer
}

export default rootReducer;