"use client";

import { useContext } from "react";
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

import { ModalContext } from '@/LibRoot';

import { Checkbox, ClassicButton } from "@/ComponentsRoot"

import { ModalContent, Title, Form, GroupCheckbox } from './ChangeTask.styled';

const ChangeTask = ({ }) => {
  const { payload: { subtasks, task } } = useContext(ModalContext);

  const methods = useForm({
    mode: "all"
  });

  const onSubmit = async (data) => {
    console.log(data);
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