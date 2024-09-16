import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootState, useTypedSelector } from '../store';
const buttonClass = `p-2 text-xs w-10 border-[1px] border-black aspect-square bg-[#A61D33] 2xl:w-12 2xl:text-lg rounded-xl text-black`;

const Pagination: React.FC = () => {
  const { allNames } = useTypedSelector((state: RootState) => state.starWars);
  const { count, next, previous, results } = allNames;
  const currentPage = next
    ? parseInt(new URL(next).searchParams.get('page') as string) - 1
    : previous
    ? parseInt(new URL(previous).searchParams.get('page') as string) + 1
    : 1;

  const pageCount = Math.ceil(count / results.length);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber: number) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber.toString());
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const renderPageButtons = () => {
    const pageButtons: JSX.Element[] = [];
    const maxButtons = 5; // Adjust the number of buttons displayed
    let startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
    let endPage = startPage + maxButtons - 1;

    if (endPage > pageCount) {
      endPage = pageCount;
      startPage = Math.max(endPage - maxButtons + 1, 1);
    }

    if (startPage > 1) {
      pageButtons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={buttonClass}
        >
          1
        </button>
      );

      if (startPage > 2) {
        pageButtons.push(
          <button key="start-ellipsis" className={buttonClass} disabled>
            ...
          </button>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${buttonClass} `}
        >
          {i}
        </button>
      );
    }

    if (endPage < pageCount) {
      if (endPage < pageCount - 1) {
        pageButtons.push(
          <button key="end-ellipsis" className={buttonClass} disabled>
            ...
          </button>
        );
      }

      pageButtons.push(
        <button
          key={pageCount}
          onClick={() => handlePageChange(pageCount)}
          className={buttonClass}
        >
          {pageCount}
        </button>
      );
    }

    return pageButtons;
  };

  if (pageCount < 2) return null;

  return (
    <div className="w-full px-8 lg:px-16 flex justify-end items-center">
      <div className="flex justify-end items-center gap-x-2">
        <button
          className={buttonClass}
          onClick={() => {
            const prevPage = currentPage > 1 ? currentPage - 1 : pageCount;
            handlePageChange(prevPage);
          }}
        >
          prev{' '}
        </button>
        {renderPageButtons()}
        <button
          className={buttonClass}
          onClick={() => {
            const nextPage = currentPage < pageCount ? currentPage + 1 : 1;
            handlePageChange(nextPage);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
