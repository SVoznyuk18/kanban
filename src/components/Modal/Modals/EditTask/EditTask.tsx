
import React, { useContext } from "react"
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";

import { addNewTaskValidationSchema, ModalContext } from '@/LibRoot';
import { IColumn, ISubtask } from '@/TypesRoot';
import { addNewTaskAction, editTaskAction } from '@/ReduxRoot';
import { useTypedSelector } from '@/UtilsRoot';
import { ClassicButton, ClassicInput, AdditionalInput, Teaxtarea, CustomSelect, DynamicInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './EditTask.styled';

type ITaskFormValue = {
  taskName: string;
  description: string;
  status: string;
  subtasks?: Partial<ISubtask>[];
};

const EditTask: React.FC = () => {

  const dispatch = useDispatch();
  const { columns } = useTypedSelector(state => state?.columns);
  const { board } = useTypedSelector(state => state?.board);
  // const { tasks } = useTypedSelector(state => state?.tasks);
  // const { subtasks } = useTypedSelector(state => state?.subtasks);
  const { payload: { subtasks, task, column }, handleOpenModal, setPayload } = useContext(ModalContext);

  const statuses = columns.map((column: IColumn) => column.columnName);

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(addNewTaskValidationSchema),
    defaultValues: {
      taskName: task?.taskName,
      description: task?.description,
      status: task?.status,
      subtasks: subtasks
    }
  });
  const { formState: { errors } } = methods;

  const onSubmit = async (data: ITaskFormValue) => {
    const { taskName, description, status, subtasks } = data;
    const filteredColumnBycolumnName = columns.filter(column => column?.columnName === status);
    const configureTaskData = {
      _id: task?._id,
      mainBoardId: board?._id,
      columnId: filteredColumnBycolumnName[0]._id,
      taskName,
      description,
      status,
      // subtasks
    }
    // dispatch(addNewTaskAction(configureTaskData));
    dispatch(editTaskAction(configureTaskData));
    console.log('data', data)
    console.log('filteredColumnBycolumnName', filteredColumnBycolumnName)
  };


  return (
    <ModalContent>
      <Title>Edit Task</Title>
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
          <DynamicInput
            label="Subtasks"
            id='subtasks'
            type='text'
            fieldName='subtasks'
            inputName="subtaskName"
            buttonName='Add new task'
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

export default EditTask;