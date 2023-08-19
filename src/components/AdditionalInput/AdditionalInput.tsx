'use client'

import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";


import { ClassicButton, ClassicInput, CustomSVG } from "@/ComponentsRoot";

import { SVGPath } from '@/ConstantsRoot';

import { Wrapper, Title, InputWrapper, Button } from './AdditionalInput.styled';

interface IValidation {
  required: string
}

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
  errorMessage?: string,
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
  validation,
}) => {

  const [additionalInputs, setAdditionalsInputs] = useState<Array<number>>([]);

  const handleAddInput = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setAdditionalsInputs([...additionalInputs, Date.now()]);
  }

  const handleDeleteInput = (e: React.MouseEvent<HTMLButtonElement>, elem: number) => {
    e.preventDefault();
    const filteredInputs = additionalInputs.filter(input => input !== elem);
    setAdditionalsInputs(filteredInputs);
  }

  return (
    <Wrapper>
      <Title>{additionalInputs.length > 0 && 'Columns'}</Title>
      {additionalInputs && additionalInputs.map(aditionalInput => (
        <InputWrapper key={aditionalInput}>
          <ClassicInput
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            width={width}
            height={height}
            padding={padding}
            borderRadius={borderRadius}
            fontSize={fontSize}
            validation={validation}
            register={register}
          />
          <Button onClick={(e) => handleDeleteInput(e, aditionalInput)}>
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