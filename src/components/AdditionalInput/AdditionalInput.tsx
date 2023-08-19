'use client'

import React, { useState } from "react";
import { FieldValues, UseFormRegister, UseFormUnregister, FieldError, DeepMap } from "react-hook-form";

import { ClassicButton, ClassicInput, CustomSVG } from "@/ComponentsRoot";
import { SVGPath } from '@/ConstantsRoot';

import { Wrapper, Title, InputWrapper, Button } from './AdditionalInput.styled';

interface IValidation {
  required: string
}

type FieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<TFieldValues, FieldError>

interface IProps {
  width?: string,
  height?: string,
  htmlFor?: string,
  labelFontSize?: string,
  label?: string,
  id?: string,
  type?: string,
  name: string,
  placeholder?: string,
  padding?: string,
  borderRadius?: string,
  fontSize?: string,
  register: UseFormRegister<FieldValues>,
  validation: IValidation,
  unregister: UseFormUnregister<FieldValues>,
  errorMessage?: string,
  errors: FieldErrors
}

const AdditionalInput: React.FC<IProps> = ({
  width,
  height,
  htmlFor,
  labelFontSize,
  label,
  id,
  type,
  name,
  placeholder,
  padding,
  borderRadius,
  fontSize,
  register,
  unregister,
  validation,
  errors
}) => {

  const [additionalInputs, setAdditionalsInputs] = useState<Array<number>>([]);

  const handleAddInput = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setAdditionalsInputs([...additionalInputs, Date.now()]);
  }

  const handleDeleteInput = (e: React.MouseEvent<HTMLButtonElement>, name: string, elem: number) => {
    e.preventDefault();
    const filteredInputs = additionalInputs.filter(input => input !== elem);
    unregister(`${name}_${elem}`)
    setAdditionalsInputs(filteredInputs);
  }

  return (
    <Wrapper>
      <Title>{additionalInputs.length > 0 && 'Columns'}</Title>
      {additionalInputs && additionalInputs.map(aditionalInput => (
        <InputWrapper key={aditionalInput}>
          <ClassicInput
            id={`${id}_${aditionalInput}`}
            type={type}
            name={`${name}_${aditionalInput}`}
            validation={validation}
            register={register}
            errorMessage={errors?.[`${name}_${aditionalInput}`] && errors?.[`${name}_${aditionalInput}`]?.message?.toString()}
          />
          <Button onClick={(e) => handleDeleteInput(e, name, aditionalInput)}>
            <CustomSVG
              width='15px'
              height='15px'
              path={SVGPath.close}
              fill='#828FA3'
              stroke='#828FA3'
            // strokeWidth="2"
            />
          </Button>
        </InputWrapper>
      ))}
      <ClassicButton
        width='100%'
        height="40px"
        onClick={(e) => handleAddInput(e)}
      >
        + Add New Column
      </ClassicButton>
    </Wrapper>
  )
}

export default AdditionalInput;