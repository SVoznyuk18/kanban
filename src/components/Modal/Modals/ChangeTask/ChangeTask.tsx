"use client";

import { useContext } from "react";
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { IColumn, ITask } from '@/TypesRoot';

import { ModalContext } from '@/LibRoot';
import { useTypedSelector } from '@/UtilsRoot';
import { useDispatch } from "react-redux";
import { editTaskAction } from '@/ReduxRoot';


import { Checkbox, ClassicButton, CustomSelect } from "@/ComponentsRoot"

import { ModalContent, Title, Form, GroupCheckbox } from './ChangeTask.styled';


interface IDataForm {
  status: string;
  [key: string]: string;
}

const ChangeTask = ({ }) => {
  const { payload: { subtasks, task, column } } = useContext(ModalContext);
  const { columns } = useTypedSelector(state => state?.columns);
  // const { subtasks } = useTypedSelector(state => state?.subtasks);

  const dispatch = useDispatch();


  const statuses = columns.map((column: IColumn) => column.columnName);

  const methods = useForm({
    mode: "all",
    defaultValues: {
      status: column?.columnName
    }
  });

  const { formState: { errors } } = methods;

  const isChangedTask = (task: ITask, status: string): boolean => task?.status !== status;

  const onSubmit = async (data: IDataForm) => {

    const configureTask = { ...task, status: data?.status };
    if (isChangedTask(task, data?.status)) {
      dispatch(editTaskAction(configureTask));
    }

  };
  return (
    <ModalContent>
      <Title>{task?.taskName}</Title>
      {/* <Description></Description> */}
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <GroupCheckbox>
            {subtasks && subtasks.map(subtask => (
              <Checkbox
                key={subtask?._id}
                label={subtask?.subtaskName}
                htmlFor={subtask?._id}
                id={subtask?._id}
                name={subtask?._id}
                checked={subtask?.isCompleted}
              />
            ))}
          </GroupCheckbox>
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
};
export default ChangeTask;