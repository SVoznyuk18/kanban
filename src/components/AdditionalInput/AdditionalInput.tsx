'use client'

import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { ClassicButton, CustomSVG } from "@/ComponentsRoot";
import { SVGPath } from '@/ConstantsRoot';
import { Wrapper, Title, InputWrapper, Button, Input, ErrorMessage } from './AdditionalInput.styled';

interface IProps {
  label?: string;
  id?: string;
  type: string;
  name: string;
  buttonName: string;
}

const AdditionalInput = ({
  label,
  type,
  buttonName
}: IProps) => {

  const handleDeleteInput = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();
    // @ts-ignore
    const deletedColumns = fields.filter(field => field?.columnId === fields[index].columnId);
    setValue('deletedColumns', deletedColumns)
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
    name: "columns"
  });

  const handleAddInput = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    append({ columnName: '', columnId: `${Date.now()}` });
  }

  return (
    <Wrapper>
      <Title>{fields.length > 0 && label}</Title>
      {fields && fields.map((field, index) => (
        <InputWrapper key={field?.id}>
          <Input
            type={type}
            {...register(`columns[${index}].columnName`)}
          />
          <ErrorMessage>
            {(errors?.columns && Array.isArray(errors?.columns)) && errors?.columns[index]?.columnName?.message}
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