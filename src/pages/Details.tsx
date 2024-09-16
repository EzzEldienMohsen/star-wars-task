import React from 'react';
import { AppDispatch, RootState, useTypedSelector } from '../store';
import { DetailsTable, Form, Pagination } from '../components';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getAllNames } from '../features/starWars/starWarsSlice';

const Details: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const page =
    searchParams.get('page') ||
    JSON.parse(localStorage.getItem('page') || '""');
  React.useEffect(() => {
    dispatch(getAllNames({ page }));
  }, [page]);
  const { allNames, isLoading } = useTypedSelector(
    (state: RootState) => state.starWars
  );
  if (isLoading) {
    return (
      <div className="flex w-full py-16 justify-center items-center">
        <span className="loading loading-spinner loading-lg text-[#A61D33]"></span>
      </div>
    );
  }
  return (
    <div className="w-full my-16 px-8 flex flex-col justify-start items-start gap-y-4 md:gap-y-6 lg-gap-y-8">
      <h1 className="font-bold text-black text-md md:text-lg lg:text-2xl underline underline-offset-2 capitalize">
        star wars
      </h1>
      <Form />
      <DetailsTable results={allNames.results} />
      <Pagination />
    </div>
  );
};

export default Details;
