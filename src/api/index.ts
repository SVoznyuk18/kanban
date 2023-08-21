import axios, { AxiosResponse, AxiosError } from "axios";

const server = axios.create({
  baseURL: `http://localhost:3000/api`,
});

interface ErrorResponse {
  message: string;
}

export const getData = async<T>(url: string): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<T> = await server.get(url);
    return response.data;
    //@ts-ignore
  } catch (error: AxiosError<ErrorResponse>) {
    console.error(`Error fetching data to ${url}:`, error.message);
    return undefined;
  }
}

//@ts-ignore
export const postData = async<T>(url: string, post): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<T> = await server.post(url, post);

    return response.data;
    //@ts-ignore
  } catch (error: AxiosError<ErrorResponse>) {
    console.error(`Error posting data to ${url}:`, error.message);
    return undefined;
  }
};

//@ts-ignore
export const putData = async<T>(url: string, post): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<T> = await server.put(url, post);
    return response.data;
    //@ts-ignore
  } catch (error: AxiosError<ErrorResponse>) {
    console.error(`Error putting data to ${url}:`, error.message);
  }
}

export const deleteData = async<T>(url: string): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<T> = await server.delete(url);
    return response.data;
    //@ts-ignore

  } catch (error: AxiosError<ErrorResponse>) {
    console.error(`Error deleting data to ${url}:`, error.message);
  }
}
