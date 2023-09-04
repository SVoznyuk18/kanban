'use client'

import React, { useState, InputHTMLAttributes, } from "react"
import { FieldValues, UseFormRegister, Path, UseFormSetValue } from "react-hook-form";

import { Wrapper, Input, Label, DropDownMenu, OptionsList, OptionItem } from './CustomSelect.styled';

interface IValidation {
  required: string,
  validate?: (value: string) => string | undefined
}

interface IProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  width?: string;
  height?: string;
  htmlFor?: string;
  labelFontSize?: string;
  label?: string;
  id?: string;
  type?: string;
  name: Path<T>;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  register: UseFormRegister<T>;
  validation: IValidation;
  setValue: UseFormSetValue<T>;
}

const CustomSelect = <T extends FieldValues>({
  options,
  width,
  height,
  htmlFor,
  labelFontSize,
  label,
  id,
  type,
  name,
  padding,
  fontSize,
  borderRadius,
  register,
  validation,
  setValue
}: IProps<T>) => {

  const [isShowOptions, setIsShowOptions] = useState<boolean>(false);


  const handleSelectValue = (value: string) => {
    setIsShowOptions(!isShowOptions);
    //@ts-ignore
    setValue(name, value);
  }

  return (
    <Wrapper>
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
      <Input
        id={id}
        type={type}
        width={width}
        height={height}
        padding={padding}
        fontSize={fontSize}
        borderRadius={borderRadius}
        {...register(name, validation)}
        onClick={() => setIsShowOptions(!isShowOptions)}
      />
      {options.length > 0 && (
        <DropDownMenu isShow={isShowOptions}>
          <OptionsList >
            {options.length > 0 && options.map((option: string) => {
              return <OptionItem key={option} onClick={() => handleSelectValue(option)}>{option}</OptionItem>
            })}
          </OptionsList>
        </DropDownMenu>
      )}
    </Wrapper>
  )
}

export default CustomSelect;