import React, { useContext } from "react"
import { useDispatch } from "react-redux";

import { ModalContext } from '@/LibRoot';
import { deleteTaskAction, deleteSubtaskAction } from '@/ReduxRoot';
import { ClassicButton } from "@/ComponentsRoot";
import { ModalContent, Title, Description, ButtonsWrapper } from './DeleteTask.styled';

const DeleteTask = () => {

  const { handleCloseModal, payload: { subtasks: currentSubtasks, task } } = useContext(ModalContext);
  const dispatch = useDispatch();

  const handleDeleteBoard = () => {
    dispatch(deleteTaskAction(task));
    dispatch(deleteSubtaskAction(currentSubtasks));
    handleCloseModal();
  };

  return (
    <ModalContent>
      <Title>Delete Task</Title>
      <Description>
        `Are you sure you want to delete the &lsquo;{task?.taskName}&lsquo; This action will remove all subtasks.`
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

export default DeleteTask;