import React, { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import { Wrapper, Input, ErrorMessage, Label } from './ClassicInput.styled';

interface IValidation {
  required: string,
  validate: (value: string) => string | undefined
}

interface IProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  width?: string,
  height?: string,
  htmlFor?: string,
  labelFontSize?: string,
  label?: string,
  id?: string,
  type?: string,
  name: Path<T>,
  placeholder?: string,
  padding?: string,
  borderRadius?: string,
  fontSize?: string,
  register: UseFormRegister<T>,
  validation: IValidation,
  errorMessage?: string,
}

export const ClassicInput = <T extends FieldValues>({
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
}: IProps<T>) => {
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