'use client'

import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { Wrapper, TextArea, ErrorMessage, Label } from './Textarea.styled';

interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string,
  height?: string,
  resize: 'both' | 'horizontal' | 'vertical' | 'none',
  htmlFor?: string,
  label?: string,
  id?: string,
  name: string,
  placeholder?: string,
  errorMessage?: string | undefined
}

export const Teaxtarea = ({
  width,
  height,
  resize,
  htmlFor,
  label,
  id,
  name,
  placeholder,
  errorMessage,
}: ITextareaProps) => {

  const {
    control
  } = useFormContext();

  return (
    <Wrapper width={width}>
      {
        label && (
          <Label
            htmlFor={htmlFor}
          >
            {label}
          </Label>
        )
      }
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextArea
            id={id}
            placeholder={placeholder}
            width={width}
            height={height}
            resize={resize}
            {...field}
          />
        )}
      />
      <ErrorMessage>
        {errorMessage}
      </ErrorMessage>
    </Wrapper>
  )
}

export default Teaxtarea;
