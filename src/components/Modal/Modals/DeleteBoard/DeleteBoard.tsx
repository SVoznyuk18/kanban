import React, { useContext } from "react"
import { useDispatch } from "react-redux";

import { useTypedSelector } from '@/UtilsRoot';
import { ModalContext } from '@/LibRoot';
import { deleteBoardAction } from '@/ReduxRoot';
import { ClassicButton } from "@/ComponentsRoot";
import { ModalContent, Title, Description, ButtonsWrapper } from './DeleteBoard.styled';

const DeleteBoard: React.FC = () => {

  const { handleCloseModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const board = useTypedSelector(state => state?.board?.board);

  const handleDeleteBoard = () => {
    dispatch(deleteBoardAction(board?._id));
  }

  return (
    <ModalContent>
      <Title>Add New Task</Title>
      <Description>
        `Are you sure you want to delete the &lsquo;${board?.boardName}&lsquo; This action will remove all columns and tasks and cannot be reversed.`
      </Description>
      <ButtonsWrapper>
        <ClassicButton
          width='100%'
          height="40px"
          variant="delete"
          onClick={() => handleDeleteBoard()}
        >
          Delete
        </ClassicButton>
        <ClassicButton
          width='100%'
          height="40px"
          variant="light"
          onClick={() => handleCloseModal()}
        >
          Cancel
        </ClassicButton>
      </ButtonsWrapper>
    </ModalContent>
  )
}

export default DeleteBoard;