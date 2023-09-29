import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { useTypedSelector } from '@/UtilsRoot';

import { IBoard, IColumn } from '@/TypesRoot';
import { addNewBoardsAction, editBoardAction } from '@/ReduxRoot'

import { ClassicButton, ClassicInput, AdditionalInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './EditBoard.styled';

interface IData {
  boardName: string
  [x: string]: string | undefined;
}

interface IEditBoardPayload {
  boardName: string;
  boardId: string;
  columnsName: { [x: string]: string | undefined };
}

const EditBoard = () => {

  const dispatch = useDispatch();
  const boardFromStore = useTypedSelector(state => state?.board?.board);
  const columnsFromStore = useTypedSelector(state => state?.columns?.columns);

  const {
    register,
    unregister,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IData>({ mode: "all" });

  const onSubmit: SubmitHandler<IData> = async (data) => {
    const { boardName, ...columns } = data;

    const editBoardConfigure: IEditBoardPayload = {
      boardName,
      boardId: boardFromStore?._id,
      columnsName: columns
    };

    dispatch(editBoardAction(editBoardConfigure));
  };

  const arrFromColumns = (columns: IColumn[]) => {
    return columns.map(column => column?.columnName);
  }

  useEffect(() => {
    setValue('boardName', boardFromStore?.boardName)
  }, []);

  return (
    <ModalContent>
      <Title>Edit Board</Title>
      <Form>
        <ClassicInput
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
        <AdditionalInput
          label="Columns"
          id='columnName'
          type='text'
          name='columnName'
          register={register}
          unregister={unregister}
          columns={arrFromColumns(columnsFromStore)}
          setValue={setValue}
          validation={{ required: 'Required field' }}
          errors={errors}
          buttonName='Add new column'
        />
      </Form>
      <ClassicButton
        width='100%'
        height="40px"
        variant="default"
        onClick={handleSubmit(onSubmit)}
      >
        Save Changes
      </ClassicButton>
    </ModalContent>
  )
}

export default EditBoard;