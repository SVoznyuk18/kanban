"use client"

import React, { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Wrapper, Label, Input } from './Checbox.styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string,
  label: string,
  id: string,
  name: string,
  checked: boolean;
}

const Checkbox = ({ htmlFor, label, id, name, checked }: InputProps) => {

  const { register, control } = useFormContext();

  return (
    <Wrapper>
      <Controller
        control={control}
        name={name}
        render={() => (
          <>
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
          </>
        )}
      />
    </Wrapper>
  )
};

export default memo(Checkbox);
