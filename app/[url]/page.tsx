
import { getDataByParams } from '@/ApiRoot';
import { IBoard } from '@/TypesRoot';

import { Board } from '@/ComponentsRoot';

interface IProps {
  params: {
    url: string
  }
}

export default async function BoardPage({ params }: IProps) {

  // const result = await getDataByParams(`http://localhost:3000/api/boards/${params?.url}`, params?.url) as IBoard;

  return (
    <Board params={params} />
  );
}