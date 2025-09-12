import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTE_PATH } from './paths';
import { AppLayout } from '@/components';
import {
  CalendarPage,
  CallbackPage,
  DietPage,
  FoodPage,
  IngredientPage,
  LoginPage,
  MainPage,
  MealLogPage,
  MyPage,
  NotFoundPage,
  SearchPage,
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
    path: ROUTE_PATH.LOGIN,
    element: <AppLayout layoutType='none' />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.CALENDAR,
    element: <AppLayout layoutType='navigation' />,
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
    path: ROUTE_PATH.MEAL_LOG,
    element: <AppLayout layoutType='center' />,
    children: [
      {
        index: true,
        element: <MealLogPage />,
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
    path: ROUTE_PATH.SEARCH.ROOT,
    element: <AppLayout layoutType='navigation' />,
    children: [
      {
        element: <SearchPage />,
        children: [
          {
            path: ROUTE_PATH.SEARCH.INGREDIENT,
            element: <IngredientPage />,
          },
          {
            path: ROUTE_PATH.SEARCH.FOOD,
            element: <FoodPage />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTE_PATH.CALLBACK,
    element: <AppLayout layoutType='none' />,
    children: [
      {
        index: true,
        element: <CallbackPage />,
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
