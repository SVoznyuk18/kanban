import { useForm } from 'react-hook-form';

import { ClassicButton, ClassicInput, AdditionalInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './AddNewBoard.styled';

interface IData {
  name?: string
}

const AddNewBoard = () => {
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "all" });

  const onSubmit = async (data: IData) => {

    // const response = await fetch('http://localhost:3000/api/boards', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    //   },
    //   body: JSON.stringify(data)
    // })
    // const result = await response.json();
    // console.log(result);
    console.log(data)
  }

  return (
    <ModalContent>
      <Title>Add New Board</Title>
      <Form>
        <ClassicInput
          label="Name"
          htmlFor='name'
          id='name'
          type='text'
          name='name'
          placeholder='e.g. Web Design'
          register={register}
          validation={{ required: 'Required field' }}
          errorMessage={errors?.name && errors?.name?.message?.toString()}
        />
        <AdditionalInput
          id='columnName'
          type='text'
          name='columnName'
          register={register}
          unregister={unregister}
          validation={{ required: 'Required field' }}
          errors={errors}
        />
      </Form>
      <ClassicButton
        width='100%'
        height="40px"
        onClick={handleSubmit(onSubmit)}
      >
        Create New Board
      </ClassicButton>
    </ModalContent>
  )
}

export default AddNewBoard;