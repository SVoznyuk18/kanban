import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { useTypedSelector } from '@/UtilsRoot';

import { IColumn } from '@/TypesRoot';
import { editBoardAction, editColumnsAction } from '@/ReduxRoot'

import { ClassicButton, ClassicInput, AdditionalInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './EditBoard.styled';

interface IData {
  boardName: string;
  // @ts-ignore
  deletedColumnsId: string[];
  [x: string]: string;
};

interface IBoardComfigure {
  boardName: string;
  boardId: string
}
interface IColumnsComfigure {
  boardId: string;
  columns: { [x: string]: string };
  deletedColumnsId: string[];
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
    formState: { errors },
  } = useForm<IData>({ mode: "all" });

  const onSubmit: SubmitHandler<IData> = async (data) => {
    const { boardName, deletedColumnsId, ...columns } = data;

    const editBoardConfigure: IBoardComfigure = {
      boardName,
      boardId: boardFromStore?._id,
    };

    const editColumnsConfigure: IColumnsComfigure = {
      boardId: boardFromStore?._id,
      columns,
      deletedColumnsId
    }
    console.log('editColumnsConfigure', editColumnsConfigure)
    dispatch(editBoardAction({ editBoardConfigure }));
    dispatch(editColumnsAction(editColumnsConfigure));
  };

  const arrFromColumns = (columns: IColumn[]): { _id: string; columnName: string }[] => {
    return columns.map(column => ({ _id: column?._id, columnName: column?.columnName }));
  }

  useEffect(() => {
    setValue('boardName', boardFromStore?.boardName);
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
          // @ts-ignore
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