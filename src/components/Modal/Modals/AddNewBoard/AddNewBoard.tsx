import { useForm } from 'react-hook-form';

import { ClassicButton, ClassicInput } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './AddNewBoard.styled';

interface IData {
  name?: string
}

const AddNewBoard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "all" });


  const onSubmit = async (data: IData) => {

    const response = await fetch('http://localhost:3000/api/boards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json();
    console.log(result);
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
      </Form>
      <ClassicButton
        width='174px'
        height="48px"
        onClick={handleSubmit(onSubmit)}
      >
        Create New Board
      </ClassicButton>
    </ModalContent>
  )
}

export default AddNewBoard;