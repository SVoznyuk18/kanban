import React, { TextareaHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import { Wrapper, TextArea, ErrorMessage, Label } from './Textarea.styled';

interface IValidation {
  required: string,
  validate?: (value: string) => string | undefined
}

interface IProps<T extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string,
  height?: string,
  resize: 'both' | 'horizontal' | 'vertical' | 'none',
  htmlFor?: string,
  labelFontSize?: string,
  label?: string,
  id?: string,
  name: Path<T>,
  placeholder?: string,
  padding?: string,
  borderRadius?: string,
  fontSize?: string,
  register: UseFormRegister<T>,
  validation: IValidation,
  errorMessage?: string,
}

export const Teaxtarea = <T extends FieldValues>({
  width,
  height,
  resize,
  htmlFor,
  labelFontSize,
  label,
  id,
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
          >
            {label}
          </Label>
        )
      }
      <TextArea
        id={id}
        placeholder={placeholder}
        width={width}
        height={height}
        padding={padding}
        borderRadius={borderRadius}
        resize={resize}
        fontSize={fontSize}
        {...register(name, validation)}
      />
      <ErrorMessage>
        {errorMessage}
      </ErrorMessage>
    </Wrapper>
  )
}

export default Teaxtarea;
