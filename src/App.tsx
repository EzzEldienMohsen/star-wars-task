import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  AllNames,
  Details,
  Home,
  Landing,
  SingleDetail,
  SingleName,
} from './pages';

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: 5 * 60 * 1000,
  },
};

const queryClient = new QueryClient({ defaultOptions });

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense
          fallback={
            <div className="flex w-full py-8 justify-center items-center">
              <span className="loading loading-spinner loading-lg text-[#A61D33]"></span>
            </div>
          }
        >
          <Home />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense
              fallback={
                <div className="flex w-full py-8 justify-center items-center">
                  <span className="loading loading-spinner loading-lg text-[#A61D33]"></span>
                </div>
              }
            >
              <Landing />
            </Suspense>
          ),
        },
        {
          path: '/allNamesPage',
          element: (
            <Suspense
              fallback={
                <div className="flex w-full py-8 justify-center items-center">
                  <span className="loading loading-spinner loading-lg text-[#A61D33]"></span>
                </div>
              }
            >
              <AllNames />
            </Suspense>
          ),
        },
        {
          path: '/details',
          element: (
            <Suspense
              fallback={
                <div className="flex w-full py-8 justify-center items-center">
                  <span className="loading loading-spinner loading-lg text-[#A61D33]"></span>
                </div>
              }
            >
              <Details />
            </Suspense>
          ),
        },
        {
          path: '/singleName',
          element: (
            <Suspense
              fallback={
                <div className="flex w-full py-8 justify-center items-center">
                  <span className="loading loading-spinner loading-lg text-[#A61D33]"></span>
                </div>
              }
            >
              <SingleName />
            </Suspense>
          ),
        },
        {
          path: '/singleDetail',
          element: (
            <Suspense
              fallback={
                <div className="flex w-full py-8 justify-center items-center">
                  <span className="loading loading-spinner loading-lg text-[#A61D33]"></span>
                </div>
              }
            >
              <SingleDetail />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
