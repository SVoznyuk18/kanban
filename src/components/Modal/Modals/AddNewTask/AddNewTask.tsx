import React from "react"
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from "react-redux";

import { IColumn } from '@/TypesRoot';
import {addNewTaskAction} from '@/ReduxRoot';
import { useTypedSelector } from '@/UtilsRoot';
import { ClassicButton, ClassicInput, AdditionalInput, Teaxtarea, CustomSelect } from "@/ComponentsRoot";
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

  const dispatch = useDispatch();

  const {
    register,
    unregister,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<IData>({ mode: "all" });

  const columns = useTypedSelector(state => state?.columns?.columns);


  const statuses = columns.map((column: IColumn) => column.columnName);

  const onSubmit: SubmitHandler<IData> = async (data) => {
    const {taskName, description, status, ...subTasks} = data;

    const configureTaskData = {
      taskName,
      description,
      status,
      subTasks
    }
    console.log('subTasks', subTasks);
    dispatch(addNewTaskAction(configureTaskData));
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
        <Teaxtarea
          label="Description"
          htmlFor='description'
          id='description'
          name='description'
          placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
          resize='none'
          register={register}
          validation={{ required: 'Required field' }}
          errorMessage={errors?.description && errors?.description?.message?.toString()}
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

        <CustomSelect
          label="Status"
          htmlFor='status'
          id='status'
          type='text'
          name='status'
          register={register}
          validation={{ required: 'Required field' }}
          setValue={setValue}
          options={statuses}
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