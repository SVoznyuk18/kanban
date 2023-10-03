import axios, { AxiosResponse, AxiosError } from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const server = axios.create({
  baseURL: `${BASE_URL}/api`,
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

export const getDataByParams = async<T>(url: string, params: object): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<T> = await server.get(url, { params: { ...params } });
    return response.data;
    //@ts-ignore
  } catch (error: AxiosError<ErrorResponse>) {
    console.error(`Error fetching data to ${url} by ${params} params:`, error.message);
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

export const deleteData = async<T>(url: string, id: string): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<T> = await server.delete(url, { params: { id } });
    return response.data;
    //@ts-ignore

  } catch (error: AxiosError<ErrorResponse>) {
    console.error(`Error deleting data to ${url}:`, error.message);
  }
}
