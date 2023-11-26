'use client'
import React, { useContext } from "react"
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { useTypedSelector } from '@/UtilsRoot';
import { addNewColumnsAction } from '@/ReduxRoot'
import { createAddNewColumnValidationSchema, ModalContext } from '@/LibRoot';
import { ClassicButton, ClassicInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './AddNewColumn.styled';

import { IColumn, IAddNewColumnsType, TAddNewColumnsForm } from '@/TypesRoot';

const AddNewColumn = () => {
  const { handleCloseModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const columnsFromStore = useTypedSelector(state => state?.columns?.columns);
  const boardFromStore = useTypedSelector(state => state?.board?.board);
  const matchColumnName = (value: string): boolean => {  // check match boardName with Saved boardName
    return columnsFromStore.some((column: IColumn) => column?.columnName?.toLocaleLowerCase() === value.toLocaleLowerCase());
  };
  const validationSchema = createAddNewColumnValidationSchema(matchColumnName);
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      columnName: ""
    }
  });
  const { formState: { errors } } = methods;

  const onSubmit: SubmitHandler<TAddNewColumnsForm> = async (data) => {
    const configureData = {
      mainBoardId: boardFromStore?._id,
      columns: [data]
    }

    dispatch(addNewColumnsAction(configureData as IAddNewColumnsType));
    handleCloseModal();
  };

  return (
    <ModalContent>
      <Title>Add New Column</Title>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <ClassicInput
            label="Name"
            htmlFor='columnName'
            id='columnName'
            type='text'
            name='columnName'
            placeholder='e.g. Web Design'
            errorMessage={errors?.columnName && errors?.columnName?.message?.toString()}
          />
          <ClassicButton
            type='submit'
            width='100%'
            height="40px"
            variant="default"
          >
            Create New Column
          </ClassicButton>
        </Form>
      </FormProvider>
    </ModalContent>
  )
}

export default AddNewColumn;