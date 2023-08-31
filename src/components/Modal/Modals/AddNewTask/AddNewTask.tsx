import React from "react"
import { useForm, SubmitHandler } from 'react-hook-form';

import { ClassicButton, ClassicInput, AdditionalInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './AddNewTask.styled';

interface IData {
  taskName: string;
  description: string;
  status: string;
  // mainColumnId: string;
  // mainBoardId: string;
  [x: string]: string | undefined;

}

const AddNewTask: React.FC = () => {

  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors }
  } = useForm<IData>({ mode: "all" });

  const onSubmit: SubmitHandler<IData> = async (data) => {
    //dispatch(addNewBoardsAction(data));
    console.log(data)
  };

  return (
    <ModalContent>
      <Title>Add New Task</Title>
      <Form>
        <ClassicInput<IData>
          label="Title"
          htmlFor='taskName'
          id='taskName'
          type='text'
          name='taskName'
          placeholder='e.g. Web Design'
          register={register}
          validation={{ required: 'Required field' }}
          errorMessage={errors?.taskName && errors?.taskName?.message?.toString()}
        />
        <AdditionalInput<IData>
          label="Subtasks"
          id='subTaskName'
          type='text'
          name='subTaskName'
          register={register}
          unregister={unregister}
          validation={{ required: 'Required field' }}
          errors={errors}
        />
      </Form>
      <ClassicButton
        width='100%'
        height="40px"
        onClick={handleSubmit(onSubmit)}
      >
        Create New Task
      </ClassicButton>
    </ModalContent>
  )
}

export default AddNewTask;