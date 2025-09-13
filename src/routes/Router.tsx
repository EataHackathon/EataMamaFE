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
  FoodInfoPage,
  AddFoodPage,
} from '@/pages';
import { SearchResultPage } from '@/pages/search-result';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: (
      <AppLayout headerLayoutType='left' navigationLayoutType='navigation' />
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.CALENDAR,
    element: <AppLayout navigationLayoutType='navigation' />,
    children: [
      {
        index: true,
        element: <CalendarPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.ADD_FOOD,
    element: <AppLayout headerLayoutType='center' />,
    children: [
      {
        index: true,
        element: <AddFoodPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.DIET,
    element: (
      <AppLayout headerLayoutType='left' navigationLayoutType='navigation' />
    ),
    children: [
      {
        index: true,
        element: <DietPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.MEAL_LOG,
    element: <AppLayout headerLayoutType='center' />,
    children: [
      {
        index: true,
        element: <MealLogPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.MY,
    element: (
      <AppLayout headerLayoutType='center' navigationLayoutType='navigation' />
    ),
    children: [
      {
        index: true,
        element: <MyPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.SEARCH.ROOT,
    element: <AppLayout navigationLayoutType='navigation' />,
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
    path: ROUTE_PATH.RESULT,
    element: <AppLayout navigationLayoutType='navigation' />,
    children: [
      {
        index: true,
        element: <SearchResultPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.CALLBACK,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <CallbackPage />,
      },
    ],
  },
  {
    path: ROUTE_PATH.CALLBACK_OAUTH,
    element: <AppLayout />,
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
  {
    path: ROUTE_PATH.FOOD_INFO,
    element: <AppLayout headerLayoutType='center' />,
    children: [
      {
        index: true,
        element: <FoodInfoPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
