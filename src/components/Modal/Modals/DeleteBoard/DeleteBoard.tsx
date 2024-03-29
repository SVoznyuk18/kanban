import React, { useContext, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation'

import { useTypedSelector } from '@/UtilsRoot';
import { ModalContext } from '@/LibRoot';
import { deleteBoardAction } from '@/ReduxRoot';
import { ClassicButton } from "@/ComponentsRoot";
import { ModalContent, Title, Description, ButtonsWrapper } from './DeleteBoard.styled';

const DeleteBoard: React.FC = () => {

  const { handleCloseModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { board } = useTypedSelector(state => state?.board);

  const handleDeleteBoard = () => {
    dispatch(deleteBoardAction({ boardId: board?._id }));
    handleCloseModal();
  };

  useEffect(() => {
    if (board?._id === undefined) {
      push('/');
      handleCloseModal();
    }
  }, [board])

  return (
    <ModalContent>
      <Title>Delete Board</Title>
      <Description>
        `Are you sure you want to delete the &lsquo;${board?.boardName}&lsquo; This action will remove all columns and tasks and cannot be reversed.`
      </Description>
      <ButtonsWrapper>
        <ClassicButton
          type='button'
          width='100%'
          height="40px"
          variant="delete"
          onClick={() => handleDeleteBoard()}
        >
          Delete
        </ClassicButton>
        <ClassicButton
          type='button'
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