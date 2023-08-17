import { useForm } from 'react-hook-form';



import { ClassicButton } from "@/ComponentsRoot";
import { ModalContent, Title, Form } from './AddNewBoard.styled';

interface IData {
  name?: string
}

const AddNewBoard = () => {


  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields }
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
  console.log('errors', errors)

  return (
    <ModalContent>
      <Title>Add New Board</Title>
      <Form>
        <input
          type='text'
          {...register('name', { required: 'required field' })}
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