'use client'

import React, { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { ClassicButton, CustomSVG } from "@/ComponentsRoot";
import { SVGPath } from '@/ConstantsRoot';
import { Wrapper, Title, InputWrapper, Button, Input, ErrorMessage } from './AdditionalInput.styled';

interface IProps {
  label?: string;
  id?: string;
  type: string;
  inputName: string;
  buttonName: string;
  errorsMessage?: unknown
}

const AdditionalInput = ({
  inputName,
  label,
  type,
  buttonName,
  errorsMessage
}: IProps) => {

  const [deletedInputs, setDeletedInputs] = useState<{ id: string; name: string; _id: string }[]>([]);

  const handleDeleteInput = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();
    // @ts-ignore
    const deletedColumns: { id: string; name: string; _id: string }[] = fields.filter(field => field?._id === fields[index]._id);
    setDeletedInputs([...deletedInputs, ...deletedColumns]);
    setValue(`deleted${name}`, [...deletedInputs, ...deletedColumns])
    remove(index);
  }

  const {
    control,
    register,
    setValue,
    formState: { errors }
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: inputName
  });

  const handleAddInput = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    append({ name: '', _id: `${Date.now()}` });
  }

  return (
    <Wrapper>
      <Title>{fields.length > 0 && label}</Title>
      {fields && fields.map((field, index) => (
        <InputWrapper key={field?.id}>
          <Input
            type={type}
            {...register(`${inputName}[${index}].name`)}
          />
          <ErrorMessage>
            {(Array.isArray(errorsMessage)) && errorsMessage[index]?.name?.message}
          </ErrorMessage>
          <Button onClick={(e) => handleDeleteInput(e, index)}>
            <CustomSVG
              width='15px'
              height='15px'
              path={SVGPath.close}
              fill='#828FA3'
              stroke='#828FA3'
              viewBox='0 -4 15 15'
            // strokeWidth="2"
            />
          </Button>
        </InputWrapper>
      ))}
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

export default AdditionalInput;