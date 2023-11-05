import { useContext } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { useTypedSelector } from '@/UtilsRoot';
import { editBoardValidationSchema, ModalContext } from '@/LibRoot';
import { editBoardAction, editColumnsAction } from '@/ReduxRoot'
import { ClassicButton, ClassicInput, AdditionalInput, DynamicInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './EditBoard.styled';

import { IColumn, ISubtask } from '@/TypesRoot';

interface IBoardComfigure {
  boardName: string;
  boardId: string
}

interface IColumnsComfigure {
  boardId: string;
  columns: IColumn[];
  deletedColumns: IColumn[];
}

interface IBoardFormValue {
  boardName: string
  columns?: Partial<IColumn>[];
  deletedFields?: Partial<IColumn>[];
}

const EditBoard = () => {
  const dispatch = useDispatch();
  const boardFromStore = useTypedSelector(state => state?.board?.board);
  const columnsFromStore = useTypedSelector(state => state?.columns?.columns);
  const { handleCloseModal, payload: { subtasks: currentSubtasks, task } } = useContext(ModalContext);

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(editBoardValidationSchema),
    defaultValues: {
      boardName: boardFromStore?.boardName,
      columns: columnsFromStore
    }
  });
  const { formState: { errors } } = methods;

  const onSubmit = async (data: IBoardFormValue) => {
    const editBoardConfigure: IBoardComfigure = {
      boardName: data?.boardName,
      boardId: boardFromStore?._id,
    };
    const editColumnsConfigure: IColumnsComfigure = {
      boardId: boardFromStore._id,
      columns: data.columns as IColumn[],
      deletedColumns: data.deletedFields as IColumn[],
    };

    if (data?.boardName !== boardFromStore?.boardName) dispatch(editBoardAction(editBoardConfigure));
    dispatch(editColumnsAction(editColumnsConfigure));
    handleCloseModal();
  };

  return (
    <ModalContent>
      <Title>Edit Board</Title>
      <FormProvider {...methods}>

        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <ClassicInput
            label="Name"
            htmlFor='boardName'
            id='boardName'
            type='text'
            name='boardName'
            placeholder='e.g. Web Design'
            errorMessage={errors?.boardName && errors?.boardName?.message?.toString()}
          />
          <DynamicInput
            label="Columns"
            id='columns'
            type='text'
            fieldName='columns'
            inputName="columnName"
            buttonName='Add new columns'
            errorsMessage={errors?.columns && errors?.columns}
          />
          <ClassicButton
            type='submit'
            width='100%'
            height="40px"
            variant="default"
          >
            Save Changes
          </ClassicButton>
        </Form>
      </FormProvider>
    </ModalContent >
  )
}

export default EditBoard;