'use client';

import React, { useState, useContext, createContext, PropsWithChildren } from "react";

interface IModalContext {
  handleToggleModal: (T: string) => void,
  isOpenModal: boolean,
  modalType: string,
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  const handleToggleModal = (modaType: string) => {
    setIsOpenModal(!isOpenModal);
    setModalType(modaType);
  }

  return (
    <ModalContext.Provider
      value={{
        handleToggleModal,
        modalType,
        isOpenModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext);