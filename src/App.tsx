import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Home, Landing } from './pages';

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
              <span className="loading loading-spinner loading-lg text-newRed"></span>
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
                  <span className="loading loading-spinner loading-lg text-newRed"></span>
                </div>
              }
            >
              <Landing />
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
