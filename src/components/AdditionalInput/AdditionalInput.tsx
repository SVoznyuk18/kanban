'use client'

import React, { useState, useEffect } from "react";
import { FieldValues, UseFormRegister, UseFormUnregister, FieldError, DeepMap, Path, UseFormSetValue } from "react-hook-form";

import { ClassicButton, ClassicInput, CustomSVG } from "@/ComponentsRoot";
import { SVGPath } from '@/ConstantsRoot';

import { Wrapper, Title, InputWrapper, Button } from './AdditionalInput.styled';

interface IValidation {
  required: string
}

interface IData {
  boardName: string
  [x: string]: string | undefined;
}

type FieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<TFieldValues, FieldError>

interface IProps<T extends FieldValues> {

  label?: string,
  id?: string,
  type?: string,
  name: Path<T> | string,
  register: UseFormRegister<T>,
  validation: IValidation,
  setValue?: UseFormSetValue<IData>;
  unregister: UseFormUnregister<T>,
  columns?: string[] | undefined,
  errorMessage?: string,
  errors: FieldErrors,
  buttonName: string
}

const AdditionalInput = <T extends FieldValues>({
  label,
  id,
  type,
  name,
  register,
  unregister,
  setValue,
  columns,
  validation,
  errors,
  buttonName
}: IProps<T>) => {

  const [additionalInputs, setAdditionalsInputs] = useState<(number | string)[]>(columns || []);

  const handleAddInput = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setAdditionalsInputs([...additionalInputs, Date.now()]);
  }

  const handleDeleteInput = (e: React.MouseEvent<HTMLButtonElement>, name: string, elem: number | string) => {
    e.preventDefault();
    const filteredInputs = additionalInputs.filter(input => input !== elem);
    unregister(`${name}_${elem}` as any)
    setAdditionalsInputs(filteredInputs);
  }
  useEffect(() => {
    if (columns !== undefined && columns?.length > 0 && setValue !== undefined) {
      columns.forEach(column => setValue(column, column))
    }
  }, [columns])

  return (
    <Wrapper>
      <Title>{additionalInputs.length > 0 && label}</Title>
      {additionalInputs && additionalInputs.map(aditionalInput => (
        <InputWrapper key={aditionalInput}>
          <ClassicInput
            id={`${id}_${aditionalInput}`}
            type={type}
            //@ts-ignore
            name={`${aditionalInput}`}
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
        variant="default"
        onClick={(e) => handleAddInput(e)}
      >
        {buttonName}
      </ClassicButton>
    </Wrapper>
  )
}

export default AdditionalInput;