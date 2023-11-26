'use client'
import React, { useContext } from "react"
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { camelCase } from 'lodash';
import { yupResolver } from "@hookform/resolvers/yup";

import { IBoard, IBoardForm, IAddNewBoardType } from '@/TypesRoot';
import { useTypedSelector } from '@/UtilsRoot';
import { addNewBoardsAction } from '@/ReduxRoot'
import { createAddNewBoardValidationSchema, ModalContext } from '@/LibRoot';
import { ClassicButton, ClassicInput, DynamicInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './AddNewBoard.styled';

const AddNewBoard = () => {
  const { handleCloseModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const boardsFromStore = useTypedSelector(state => state?.boards?.boards);
  const matchBoardname = (value: string): boolean => {  // check match boardName with Saved boardName
    return boardsFromStore.some((board: IBoard) => board?.url === camelCase(value));
  };
  const validationSchema = createAddNewBoardValidationSchema(matchBoardname);
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      boardName: ""
    }
  });
  const { formState: { errors } } = methods;

  const onSubmit: SubmitHandler<IBoardForm> = async (data) => {
    dispatch(addNewBoardsAction(data as IAddNewBoardType));
    handleCloseModal();
  };

  return (
    <ModalContent>
      <Title>Add New Board</Title>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <ClassicInput
            label="Name"
            htmlFor='boardName'
            id='boardName'
            type='text'
            name='boardName'
            placeholder='e.g. Web Design'
            errorMessage={errors?.boardName && errors?.boardName?.message?.toString()}
          />
          <DynamicInput
            label="Columns"
            id='columns'
            type='text'
            fieldName='columns'
            inputName="columnName"
            buttonName='Add new columns'
            errorsMessage={errors?.columns && errors?.columns}
          />
          <ClassicButton
            type='submit'
            width='100%'
            height="40px"
            variant="default"
          >
            Create New Board
          </ClassicButton>
        </Form>
      </FormProvider>
    </ModalContent>
  )
}

export default AddNewBoard;