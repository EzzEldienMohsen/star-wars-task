import { AxiosResponse } from 'axios';
import { AllNamesResponse, SingleName } from './types';
import { autoFetch } from '../../utils';

export const getAllNamesThunk = async (
  url: string,
  thunkAPI: any
): Promise<AllNamesResponse> => {
  try {
    const response: AxiosResponse<AllNamesResponse> = await autoFetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const getSingleNameThunk = async (
  url: string,
  thunkAPI: any
): Promise<SingleName> => {
  try {
    const response: AxiosResponse<SingleName> = await autoFetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
