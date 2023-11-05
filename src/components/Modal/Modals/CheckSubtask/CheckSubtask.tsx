"use client";

import { useContext, useState } from "react";
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import { IColumn, ITask, ISubtask } from '@/TypesRoot';
import { useDispatch } from "react-redux";

import { ModalContext } from '@/LibRoot';
import { useTypedSelector } from '@/UtilsRoot';
import { editTaskAction, editSubtasksAction } from '@/ReduxRoot';
import { Checkbox, ClassicButton, CustomSelect, BurgerMenu } from "@/ComponentsRoot"
import { ModalContent, Title, Description, Form, GroupCheckbox, Label, MenuItem } from './CheckSubtask.styled';

interface IDataForm {
  subtasks: ISubtask[];
  status: string;
}

const isChangedTask = (task: ITask, status: string): boolean => task?.status !== status;

const countDoneSubtasks = (subtasks: ISubtask[]): string => {
  const amoutDoneSubtasks: number = subtasks.reduce((accum, subtask) => subtask?.isCompleted ? accum + 1 : accum, 0);
  return `(${amoutDoneSubtasks} of ${subtasks.length})`
}

const CheckSubtask = () => {
  const [toggleShowMenu, setToggleShowMenu] = useState<boolean>(false);
  const { payload: { subtasks, task, column }, handleOpenModal } = useContext(ModalContext);
  const { columns } = useTypedSelector(state => state?.columns);
  const dispatch = useDispatch();
  const statuses = columns.map((column: IColumn) => column.columnName);

  const methods = useForm({
    mode: "all",
    defaultValues: {
      status: column?.columnName,
      subtasks
    }
  });
  const { formState: { errors }, control, } = methods;
  const { fields } = useFieldArray({
    control,
    name: "subtasks"
  });

  const onSubmit = async (data: IDataForm) => {
    const { status, subtasks } = data;
    const configureTask = { ...task, status };

    if (isChangedTask(task, data?.status)) dispatch(editTaskAction(configureTask));
    dispatch(editSubtasksAction(subtasks));
  };

  const openModal = (modalType: string): void => {
    handleOpenModal(modalType);
    setToggleShowMenu(prev => !prev);
  }

  return (
    <ModalContent>
      <Title>{task?.taskName}
        <BurgerMenu
          top="50px"
          right="0"
          isShow={toggleShowMenu}
          toggleShowCb={setToggleShowMenu}
        >
          <MenuItem onClick={() => openModal('EditTask')}>Edit Board</MenuItem>
          <MenuItem onClick={() => openModal('DeleteTask')}>Delete Board</MenuItem>
        </BurgerMenu>
      </Title>
      <Description>{task?.description}</Description>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <GroupCheckbox>
            <Label>Subtasks {countDoneSubtasks(subtasks)}</Label>
            {fields && fields.map((subtask, index) => (
              <Checkbox
                key={subtask?._id}
                label={subtask?.subtaskName}
                htmlFor={subtask?._id}
                id={subtask?._id}
                name={`subtasks.${index}.isCompleted`}
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
            Save Task
          </ClassicButton>
        </Form>
      </FormProvider>
    </ModalContent>
  )
};
export default CheckSubtask;