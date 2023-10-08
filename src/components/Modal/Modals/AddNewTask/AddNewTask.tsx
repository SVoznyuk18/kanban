import React from "react"
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch } from "react-redux";

import { addNewTaskValidationSchema } from '@/LibRoot';

import { IColumn } from '@/TypesRoot';
import { addNewTaskAction } from '@/ReduxRoot';
import { useTypedSelector } from '@/UtilsRoot';
import { ClassicButton, ClassicInput, AdditionalInput, Teaxtarea, CustomSelect } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './AddNewTask.styled';

interface ITaskFormValue {
  taskName: string;
  description: string;
  status: string;
  subtasks?: { name: string }[];
}

const AddNewTask: React.FC = () => {

  const dispatch = useDispatch();

  const { columns } = useTypedSelector(state => state?.columns);
  const { board } = useTypedSelector(state => state?.board);

  const statuses = columns.map((column: IColumn) => column.columnName);

  const methods = useForm<ITaskFormValue>({
    mode: "all",
    resolver: yupResolver(addNewTaskValidationSchema),
    defaultValues: {
      taskName: "",
      status: ''
    }
  });

  const { formState: { errors } } = methods;

  const onSubmit: SubmitHandler<ITaskFormValue> = async (data) => {
    const { taskName, description, status, subtasks } = data;

    const filteredColumnBycolumnName = columns.filter(column => column?.columnName === status);

    const configureTaskData = {
      mainBoardId: board?._id,
      columnId: filteredColumnBycolumnName[0]._id,
      taskName,
      description,
      status,
      subtasks
    }
    dispatch(addNewTaskAction(configureTaskData));
  };

  return (
    <ModalContent>
      <Title>Add New Task</Title>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <ClassicInput
            label="Title"
            htmlFor='taskName'
            id='taskName'
            type='text'
            name='taskName'
            placeholder='e.g. Web Design'
            errorMessage={errors?.taskName && errors?.taskName?.message?.toString()}
          />
          <Teaxtarea
            label="Description"
            htmlFor='description'
            id='description'
            name='description'
            placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
            resize='none'
            errorMessage={errors?.description && errors?.description?.message?.toString()}
          />
          <AdditionalInput
            label="Subtasks"
            id='subtasks'
            type='text'
            inputName='subtasks'
            buttonName='Add new subtask'
            errorsMessage={errors?.subtasks && errors?.subtasks}
          />
          <CustomSelect
            label="Status"
            htmlFor='status'
            id='status'
            type='text'
            name='status'
            errorMessage={errors?.status && errors?.status?.message?.toString()}
            options={statuses}
          />
          <ClassicButton
            type='submit'
            width='100%'
            height="40px"
            variant="default"
          >
            Create New Task
          </ClassicButton>
        </Form>
      </FormProvider>
    </ModalContent>
  )
}

export default AddNewTask;