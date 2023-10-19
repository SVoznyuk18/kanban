'use client';

import React, { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

import { AddNewBoard, AddNewTask, EditBoard, DeleteBoard, ChangeTask } from './Modals';
import { ModalContext } from '@/LibRoot';
import { ModalWrapper, ModalContent, CloseButton } from './Modal.styled';

interface IModalContext {
  handleOpenModal?: (T: string) => void,
  handleCloseModal: () => void,
  isOpenModal: boolean,
  modalType: string,
}

const RenderModal = ({ modalType, ...props }: IModalContext) => {
  switch (modalType) {
    case 'AddNewTask':
      return <AddNewTask />
    case 'AddNewBoard':
      return <AddNewBoard />
    case 'EditBoard':
      return <EditBoard />
    case 'DeleteBoard':
      return <DeleteBoard />
    case 'ChangeTask':
      return <ChangeTask />
    default:
      return <h1>Default</h1>
  }
}
const Modal = () => {

  const { handleCloseModal, isOpenModal, modalType } = useContext(ModalContext);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 27 || e.key === "Escape") {
        handleCloseModal();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

  }, [isOpenModal])

  const handleBackgroudClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) handleCloseModal()
  }

  return isOpenModal ? createPortal(
    <ModalWrapper isOpenModal={isOpenModal} onClick={handleBackgroudClick}>
      <ModalContent>
        <CloseButton onClick={() => handleCloseModal()}>
          <Image
            width="18"
            height="18"
            src='/icon-close.svg'
            alt='close_icon'
          />
        </CloseButton>
        <RenderModal isOpenModal={isOpenModal} modalType={modalType} handleCloseModal={handleCloseModal} />
      </ModalContent>
    </ModalWrapper>,
    document.getElementById("modal-root") as HTMLElement
  ) : null
}

export default Modal;