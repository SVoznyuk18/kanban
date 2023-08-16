'use client'
import ClassicButton from "../ClassicButton/ClassicButton";

import { Wrapper, Title } from './EmptyBoard.styled';
const EmptyBoard = () => {
  return (
    <Wrapper>
      <Title>This board is empty. Create a new column to get started.</Title>
      <ClassicButton
        width='174px'
        height="48px"
        onClick={() => console.log('test')}
      >
        + Add New Column
      </ClassicButton>
    </Wrapper>
  )
}

export default EmptyBoard;