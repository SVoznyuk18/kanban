import { IBoard } from '@/TypesRoot';

export interface IBoartState {
  board: IBoard | null,
  isLoading: boolean,
  errors: string
}