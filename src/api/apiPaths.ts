export const API_PATHS = {
  USER: `/api/user/info`,
  SEARCH: `/api/search`,
  AI_FOOD: `/api/ai/search/food/detail`,
  AI_INGREDIENT: `/api/ai/search/ingredient/detail`,
  MEAL: `/api/meal`,

  SEARCH_MEAL: `/api/search/meal`,

  AI_DAY_ADVICE: (mealId: number) => `/api/ai/meals/${mealId}/advice`,
  AI_MEAL_ADVICE: (dayLogId: number) => `/api/ai/day-logs/${dayLogId}/advice`,
};
