import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useDispatch } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";

import { useTypedSelector } from '@/UtilsRoot';
import { editBoardValidationSchema } from '@/LibRoot';
import { editBoardAction, editColumnsAction } from '@/ReduxRoot'

import { ClassicButton, ClassicInput, AdditionalInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './EditBoard.styled';

interface IBoardComfigure {
  boardName: string;
  boardId: string
}

interface IColumnsComfigure {
  boardId: string;
  columns?: { name: string, _id?: string }[];
  deletedColumns?: { name: string, _id?: string }[];
}

interface IBoardFormValue {
  boardName: string
  columns?: { name: string, _id?: string }[];
  deleted?: { name: string, _id?: string }[];
}

const EditBoard = () => {
  const dispatch = useDispatch();
  const boardFromStore = useTypedSelector(state => state?.board?.board);
  const columnsFromStore = useTypedSelector(state => state?.columns?.columns);

  const currentColumns = columnsFromStore.map(column => ({ name: column?.columnName, _id: column?._id }));

  const methods = useForm<IBoardFormValue>({
    mode: "all",
    resolver: yupResolver(editBoardValidationSchema),
    defaultValues: {
      boardName: boardFromStore?.boardName,
      columns: currentColumns
    }
  });

  const { formState: { errors } } = methods;

  const onSubmit: SubmitHandler<IBoardFormValue> = async (data) => {
    const editBoardConfigure: IBoardComfigure = {
      boardName: data?.boardName,
      boardId: boardFromStore?._id,
    };
    const editColumnsConfigure: IColumnsComfigure = {
      boardId: boardFromStore?._id,
      columns: data?.columns,
      deletedColumns: data?.deleted,
    };
    console.log(editColumnsConfigure)
    if (data?.boardName !== boardFromStore?.boardName) dispatch(editBoardAction(editBoardConfigure));
    dispatch(editColumnsAction(editColumnsConfigure));
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
          <AdditionalInput
            label="Columns"
            id='columns'
            type='text'
            inputName='columns'
            buttonName='Add new column'
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