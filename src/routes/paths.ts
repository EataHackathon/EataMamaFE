export const ROUTE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  DIET: '/diet',
  CALENDAR: '/calendar',
  MY: '/my',

  MEAL_LOG: '/meal-log',
  FOOD_INFO: '/food-info',
  ADD_FOOD: '/add-food',

  SEARCH: {
    ROOT: '/search',
    INGREDIENT: 'ingredient',
    FOOD: 'food',
  },
  RESULT: '/search-result',

  CALLBACK: '/callback',
  CALLBACK_OAUTH: '/oauth/callback',
} as const;
