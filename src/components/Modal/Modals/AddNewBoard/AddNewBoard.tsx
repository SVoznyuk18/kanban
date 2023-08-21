import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import { useDispatch, useSelector } from "react-redux";
import { addNewBoardsAction } from '@/ReduxRoot'

import { ClassicButton, ClassicInput, AdditionalInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './AddNewBoard.styled';

interface IData {
  boardName: string
  [x: string]: string | undefined;
}

const AddNewBoard = () => {

  const dispatch = useDispatch();


  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors }
  } = useForm<IData>({ mode: "all" });

  const onSubmit: SubmitHandler<IData> = async (data) => {
    // const response = await fetch('http://localhost:3000/api/boards', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    //   },
    //   body: JSON.stringify(data)
    // })
    // const result = await response.json();
    dispatch(addNewBoardsAction(data))

    // console.log(result);
    // console.log(data)
  }

  return (
    <ModalContent>
      <Title>Add New Board</Title>
      <Form>
        <ClassicInput<IData>
          label="Name"
          htmlFor='boardName'
          id='boardName'
          type='text'
          name='boardName'
          placeholder='e.g. Web Design'
          register={register}
          validation={{ required: 'Required field' }}
          errorMessage={errors?.boardName && errors?.boardName?.message?.toString()}
        />
        <AdditionalInput<IData>
          id='columnName'
          type='text'
          name='columnName'
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
        Create New Board
      </ClassicButton>
    </ModalContent>
  )
}

export default AddNewBoard;