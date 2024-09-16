import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { StarWarsInitial } from './types';
import { getAllNamesThunk, getSingleNameThunk } from './starWarsThunk';
import { AllNamesResponse, SingleName } from './types';

const initialNames = {
  count: 0,
  next: '',
  previous: '',
  results: [],
};
const singleName = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: '',
  edited: '',
  url: '',
};
const initialState: StarWarsInitial = {
  isLoading: false,
  allNames: initialNames,
  singleName: singleName,
};
export const getAllNames = createAsyncThunk(
  'starWars/getAllNames',
  async (thunkAPI) => {
    return getAllNamesThunk('', thunkAPI);
  }
);
export const getSingleName = createAsyncThunk(
  'starWars/getSingleName',
  async (data: { id: string | number }, thunkAPI) => {
    const { id } = data;
    return getSingleNameThunk(`/${id}`, thunkAPI);
  }
);

const starWarsSlice = createSlice({
  name: 'starWars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getAllNames.fulfilled,
        (state, action: PayloadAction<AllNamesResponse>) => {
          state.isLoading = false;
          state.allNames = action.payload;
          toast.success("you have got star wars characters' names");
        }
      )
      .addCase(getAllNames.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getSingleName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getSingleName.fulfilled,
        (state, action: PayloadAction<SingleName>) => {
          state.isLoading = false;
          state.singleName = action.payload;
          toast.success("you have got your star wars character's names");
        }
      )
      .addCase(getSingleName.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default starWarsSlice.reducer;
