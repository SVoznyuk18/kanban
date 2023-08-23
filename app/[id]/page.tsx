'use client'

interface IProps {
  params: {
    id: string
  }
}

export default function Board({ params }: IProps) {
  console.log('params', params)
  return (
    <h1>hello</h1>
  );
}