'use client'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { camelCase } from 'lodash';
import { yupResolver } from "@hookform/resolvers/yup";

import { IBoard } from '@/TypesRoot';
import { useTypedSelector } from '@/UtilsRoot';
import { addNewBoardsAction } from '@/ReduxRoot'
import { createAddNewBoardValidationSchema } from '@/LibRoot';

import { ClassicButton, ClassicInput, AdditionalInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './AddNewBoard.styled';

interface IFormValue {
  boardName: string
  columns?: { columnName: string, columnId?: string }[]
}

const AddNewBoard = () => {

  const dispatch = useDispatch();
  const boardsFromStore = useTypedSelector(state => state?.boards?.boards);

  const matchBoardname = (value: string): boolean => {  // check match boardName with Saved boardName
    return boardsFromStore.some((board: IBoard) => board?.url === camelCase(value));
  };
  // 
  const validationSchema = createAddNewBoardValidationSchema(matchBoardname);

  const methods = useForm<IFormValue>({
    mode: "all",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      boardName: "",
      // columns: [{ columnName: "column 2", columnId: '22' }]
    }
  });

  const { formState: { errors } } = methods;

  const onSubmit: SubmitHandler<IFormValue> = async (data) => {
    dispatch(addNewBoardsAction(data));
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
          <AdditionalInput
            label="Columns"
            id='columnName'
            type='text'
            name='columnName'
            buttonName='Add new column'
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