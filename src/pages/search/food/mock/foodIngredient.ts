type FoodIngredient = {
  name: string;
  rating: 'GOOD' | 'OK' | 'CAUTION';
  content: string;
};

export const foodIngredients: FoodIngredient[] = [
  {
    name: '닭고기',
    rating: 'GOOD',
    content:
      '임산부의 기력 회복, 면역력 강화, 태아의 성장 발달에 직접적인 도움을 줘.',
  },
  {
    name: '찹쌀',
    rating: 'GOOD',
    content: '임신 중 필요한 에너지를 공급하고, 소화 부담을 줄여줘.',
  },
  {
    name: '마늘',
    rating: 'OK',
    content:
      '임산부의 면역력을 높여 감기 등 감염성 질환을 예방하는 데 도움을 줘.',
  },
  {
    name: '대추',
    rating: 'GOOD',
    content:
      '임신 중 겪기 쉬운 스트레스와 불안감을 완화하고, 혈액 생성을 도와 빈혈을 예방해.',
  },
  {
    name: '인삼',
    rating: 'CAUTION',
    content:
      '임신 초기 과다 섭취 시 태아에게 미치는 영향에 대한 안전성이 완전히 확립되지 않았어. 특히 임신성 고혈압이 있거나 몸에 열이 많은 임산부는 주의해야 해.',
  },
];
