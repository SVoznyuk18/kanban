"use client"

import React from "react";

import { useFormContext } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string,
  label: string,
  id: string,
  name: string,
  checked: boolean;
}

import { Wrapper, Label, Input } from './Checbox.styled';

const Checkbox = ({ htmlFor, label, id, name, checked }: InputProps) => {

  const { register } = useFormContext();

  return (
    <Wrapper>
      <Input
        id={id}
        type='checkbox'
        defaultChecked={checked}
        {...register(name)}
      />
      {
        label && (
          <Label
            htmlFor={htmlFor}
          >
            {label}
          </Label>
        )
      }
    </Wrapper>
  )
};

export default Checkbox;
