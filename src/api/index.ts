import axios, { AxiosResponse, AxiosError } from "axios";


const getAllBoardsApiRequest = () => axios({
  method: 'GET',
  url: 'http://localhost:3000/api/boards',
});

// const getBoardByIdApiRequest = (params) => axios({
//   method: "GET",
//   url: `http://localhost:3000/api/boards/${params}`,
//   params
// });



//////////////////////////////////////////////////////////////////////////////
interface getByIdParams {
  _id: string
}

interface responseBoardData {
  _id: string,
  boardName: string,
  createdAt: Date,
  updatedAt: Date,
}

const getBoardByIdApiRequest = (params: getByIdParams): Promise<AxiosResponse<responseBoardData>> => axios({
  method: "GET",
  url: 'http://localhost:3000/api/boards',
  params
});

//////////////////////////////////////////////////////////////////////////////

interface addNewInstance<T> {
  [key: string]: T
}

// export const addNewBoardApiRequest = (params) => axios({
//   method: "POST",
//   url: 'http://localhost:3000/api/boards',
//   params
// });

const server = axios.create({
  baseURL: `http://localhost:3000/api`,
});

interface ErrorResponse {
  message: string;
}
//@ts-ignore
export const addNewBoardApiRequest = async<T>(url: string, post): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<T> = await server.post(url, post);

    return response.data;
    //@ts-ignore
  } catch (error: AxiosError<ErrorResponse>) {
    console.error(`Error posting data to ${url}:`, error.message);
    return undefined;
  }
};




// const addNewColumnApiRequest = (params) => axios({
//   method: "POST",
//   url: 'http://localhost:3000/api/columns',
//   params
// });

// const getColumnByIdApiRequest = (params) => axios({
//   method: "GET",
//   url: `http://localhost:3000/api/columns/${params}`,
//   params
// })