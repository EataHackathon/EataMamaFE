import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTE_PATH } from './paths';
import { AppLayout } from '@/components';
import {
  CalendarPage,
  DietPage,
  MainPage,
  MyPage,
  NotFoundPage,
} from '@/pages';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <AppLayout layoutType='left' />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.CALENDAR,
    element: <AppLayout layoutType='left' />,
    children: [
      {
        index: true,
        element: <CalendarPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.DIET,
    element: <AppLayout layoutType='left' />,
    children: [
      {
        index: true,
        element: <DietPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.MY,
    element: <AppLayout layoutType='center' />,
    children: [
      {
        index: true,
        element: <MyPage />,
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
