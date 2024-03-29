'use client'

import React, { memo } from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { Wrapper, Input, ErrorMessage, Label } from './ClassicInput.styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string | undefined,
  height?: string | undefined,
  htmlFor: string,
  label: string,
  id: string,
  type: string | undefined,
  name: string,
  placeholder?: string,
  errorMessage: string | undefined
}

export const ClassicInput = ({
  width,
  height,
  htmlFor,
  label,
  id,
  type,
  name,
  placeholder,
  errorMessage
}: InputProps) => {

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
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            width={width}
            height={height}
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


export default memo(ClassicInput);