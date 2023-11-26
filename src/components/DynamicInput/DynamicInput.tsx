'use client'

import React, { useState, memo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { IColumn, ISubtask, ITask } from '@/TypesRoot';
import { ClassicButton, CustomSVG } from "@/ComponentsRoot";
import { SVGPath } from '@/ConstantsRoot';
import { Wrapper, Title, InputWrapper, Button, Input, ErrorMessage } from './DynamicInput.styled';

interface IProps {
  label?: string;
  id?: string;
  type: string;
  inputName: string;
  fieldName: string;
  buttonName: string;
  errorsMessage?: unknown
};

interface TDeletedFields extends Array<IColumn | ISubtask | ITask> {
  [Symbol.iterator](): IterableIterator<IColumn | ISubtask | ITask>;
}

const DynamicInput = ({
  inputName,
  label,
  type,
  buttonName,
  errorsMessage,
  fieldName
}: IProps) => {

  const [deletedInputs, setDeletedInputs] = useState<TDeletedFields>([]);
  const { fields, append, remove } = useFieldArray({ name: fieldName });
  const { register, setValue } = useFormContext();

  const handleAddInput = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    append({ [inputName]: '', _id: `${Date.now()}` });
  }

  const handleDeleteInput = (index: number) => {
    // @ts-ignore
    const deletedFields: IColumn | ISubtask | ITask = fields.filter(field => {
      if ('createdAt' in field) {
        // @ts-ignore
        return field?._id === fields[index]._id
      }
    })
    // @ts-ignore
    setDeletedInputs(prev => [...prev, ...deletedFields]);
    // @ts-ignore
    setValue(`deletedFields`, [...deletedInputs, ...deletedFields])
    remove(index);
  }

  return (
    <Wrapper>
      <Title>{label}</Title>
      {
        fields && fields.map((field, index) => (
          <InputWrapper key={field?.id}>
            <Input
              type={type}
              {...register(`${[fieldName]}.${index}.${[inputName]}`)}

            />
            <ErrorMessage>
              {(Array.isArray(errorsMessage)) && errorsMessage[index]?.[inputName]?.message}
            </ErrorMessage>
            <Button onClick={() => handleDeleteInput(index)}>
              <CustomSVG
                width='15px'
                height='15px'
                path={SVGPath.close}
                fill='#828FA3'
                stroke='#828FA3'
                viewBox='0 -4 15 15'
              />
            </Button>
          </InputWrapper>
        ))
      }
      <ClassicButton
        type='button'
        width='100%'
        height="40px"
        variant="default"
        onClick={(e) => handleAddInput(e)}
      >
        {buttonName}
      </ClassicButton>
    </Wrapper>
  )
}

export default memo(DynamicInput);