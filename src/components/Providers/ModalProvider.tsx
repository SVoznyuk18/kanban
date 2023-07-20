'use client';

import React, { useState, useContext, createContext, PropsWithChildren } from "react";

interface IModalContext {
  handleOpenModal: (T: string) => void,
  handleCloseModal: () => void,
  isOpenModal: boolean,
  modalType: string,
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  const handleOpenModal = (modaType: string) => {
    setIsOpenModal(!isOpenModal);
    setModalType(modaType);
  }

  const handleCloseModal = () => {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <ModalContext.Provider
      value={{
        handleOpenModal,
        handleCloseModal,
        modalType,
        isOpenModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext);