import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { camelCase } from 'lodash';

import { IBoard } from '@/TypesRoot';
import { useTypedSelector } from '@/UtilsRoot';
import { addNewBoardsAction } from '@/ReduxRoot'

import { ClassicButton, ClassicInput, AdditionalInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './AddNewBoard.styled';

interface IData {
  boardName: string
  [x: string]: string | undefined;
}

const AddNewBoard = () => {

  const dispatch = useDispatch();
  const boardsFromStore = useTypedSelector(state => state?.boards?.boards);

  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors }
  } = useForm<IData>({ mode: "all" });


  const matchBoardname = (value: string) => {  // check match boardName with Saved boardName
    const isMatch = boardsFromStore.some((board: IBoard) => board?.url === camelCase(value));
    if (isMatch) return 'Таке імя борду вже існує'
  };

  const onSubmit: SubmitHandler<IData> = async (data) => {
    dispatch(addNewBoardsAction(data));
  };

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
          validation={{ required: 'Required field', validate: (value: string) => matchBoardname(value) }}
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