'use client'
import React, { useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useTypedSelector } from '@/UtilsRoot';

interface IProps {
  children: React.ReactNode
}

const ToastHoc: React.FC<IProps> = ({ children }) => {

  const { errors: columnsErrors } = useTypedSelector(state => state?.columns);
  const { errors: boardsErrors } = useTypedSelector(state => state?.boards);
  const { errors: boardErrors } = useTypedSelector(state => state?.board);
  const { errors: tasksErrors } = useTypedSelector(state => state?.tasks);
  const { errors: subtasksErrors } = useTypedSelector(state => state?.subtasks);

  useEffect(() => {
    if (columnsErrors ||
      boardsErrors ||
      boardErrors ||
      tasksErrors ||
      subtasksErrors) {
      toast.error(
        columnsErrors ||
        boardsErrors ||
        boardErrors ||
        tasksErrors ||
        subtasksErrors
      )
    }
  }, [columnsErrors, boardsErrors, boardErrors, tasksErrors, subtasksErrors])

  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default ToastHoc;