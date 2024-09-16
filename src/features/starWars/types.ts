export type SingleName = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type AllNamesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: SingleName[];
};
 export type StarWarsInitial = {
  isLoading:boolean;
  allNames:AllNamesResponse;
  singleName:SingleName;
 }