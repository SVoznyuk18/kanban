'use client';

import React, { useState, createContext, PropsWithChildren, Dispatch, SetStateAction } from "react";
import { ISubtask, ITask, IColumn } from '@/TypesRoot';
interface IModalContext {
  handleOpenModal: (T: string) => void;
  handleCloseModal: () => void;
  setPayload: Dispatch<SetStateAction<any>>;
  payload: {
    subtasks: ISubtask[];
    task: ITask;
    column: IColumn;
  };
  isOpenModal: boolean;
  modalType: string;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');
  const [payload, setPayload] = useState<any>(null);

  const handleOpenModal = (modaType: string) => {
    setIsOpenModal(true);
    setModalType(modaType);
  }

  const handleCloseModal = () => {
    setIsOpenModal(false);
  }

  return (
    <ModalContext.Provider
      value={{
        handleOpenModal,
        handleCloseModal,
        setPayload,
        payload,
        modalType,
        isOpenModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}