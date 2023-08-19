'use client'

import { useContext } from "react";

import { ModalContext } from "../../lib/providers/ModalProvider";
import { ClassicButton } from "@/ComponentsRoot";

import { Wrapper, Title } from './EmptyBoard.styled';
const EmptyBoard = () => {

  const { handleOpenModal, handleCloseModal, modalType, isOpenModal } = useContext(ModalContext);


  return (
    <Wrapper>
      <Title>This board is empty. Create a new column to get started.</Title>
      <ClassicButton
        width='174px'
        height="48px"
        onClick={() => handleOpenModal('AddNewBoard')}
      >
        + Add New Column
      </ClassicButton>
    </Wrapper>
  )
}

export default EmptyBoard;