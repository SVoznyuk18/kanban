import React, { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Wrapper, Input, ErrorMessage, Label } from './ClassicInput.styled';

interface IValidation {
  required: string
}

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
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

export const ClassicInput: React.FC<IProps> = ({
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
  errorMessage,
}) => {
  return (
    <Wrapper width={width}>
      {
        label && (
          <Label
            htmlFor={htmlFor}
            labelFontSize={labelFontSize}
            label={label}
          >
            {label}
          </Label>
        )
      }
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        width={width}
        height={height}
        padding={padding}
        borderRadius={borderRadius}
        fontSize={fontSize}
        {...register(name, validation)}
      />
      <ErrorMessage>
        {errorMessage}
      </ErrorMessage>
    </Wrapper>
  )
}

export default ClassicInput;