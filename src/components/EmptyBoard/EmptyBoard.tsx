'use client'

import { useContext } from "react";

import { ModalContext } from "@/LibRoot";
import { ClassicButton } from "@/ComponentsRoot";
import { Wrapper, Title } from './EmptyBoard.styled';

const EmptyBoard = () => {

  const { handleOpenModal } = useContext(ModalContext);

  return (
    <Wrapper>
      <Title>This board is empty. Create a new column to get started.</Title>
      <ClassicButton
        type='button'
        height="48px"
        variant="default"
        onClick={() => handleOpenModal('AddNewBoard')}
      >
        + Add New Board
      </ClassicButton>
    </Wrapper>
  )
}

export default EmptyBoard;