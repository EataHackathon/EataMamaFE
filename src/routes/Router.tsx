import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTE_PATH } from './paths';
import { AppLayout } from '@/components';
import { MainPage, NotFoundPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
