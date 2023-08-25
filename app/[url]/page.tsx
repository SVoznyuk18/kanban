import { Board } from '@/ComponentsRoot';

interface IProps {
  params: {
    url: string
  }
}

export default async function BoardPage({ params }: IProps) {
  return (
    <Board params={params} />
  );
}