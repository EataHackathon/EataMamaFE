const gray = {
  0: '#ffffff', // 흰색
  10: '#e7e7e7', // 가장 밝은 회색
  20: '#cfcfcf',
  30: '#b7b7b7',
  40: '#a0a0a0',
  50: '#888888',
  60: '#707070',
  70: '#595959',
  80: '#414141',
  90: '#292929',
  100: '#121212', // 검은색
};

export const theme = {
  colors: {
    gray,
    // 시맨틱 색상 (의미 기반 컬러 토큰)
    primary: '#e91e63',
    secondary: '#FFEDF3',
    disabled: '#E7E7E7',
    background: '#F8F8F8',
    // 상태 색상
    status: {
      GOOD: '#DAFFDC',
      OK: '#FFFCDA',
      CAUTION: '#FFDADB',
    },
    // 텍스트 색상
    text: {
      primary: '#e91e63',
      disabled: '#A0A0A0',
      default: gray[100], // 기본 텍스트
      sub: gray[50], // 보조 텍스트
      white: gray[0], // 흰색 텍스트
      GOOD: '#1AA320',
      OK: '#F98F2C',
      CAUTION: '#FF6666',
    },
  },

  // 타이포그래피 (폰트 스타일)
  typography: {
    // 제목
    title: {
      fontSize: '1.5rem', // 24px
      lineHeight: '2rem', // 32px
    },

    // 부제목
    subtitle: {
      fontSize: '1.25rem', // 20px
      lineHeight: '1.6875rem', // 27px
    },

    // 본문
    body1: {
      fontSize: '1.125rem', // 18px
      lineHeight: '1.5rem', // 24px
    },
    body2: {
      fontSize: '1rem', // 16px
      lineHeight: '1.375rem', // 22px
    },
    body3: {
      fontSize: '0.875rem', // 14px
      lineHeight: '1.1875rem', // 19px
    },

    // 레이블
    label: {
      fontSize: '0.625rem', // 10px
      lineHeight: '0.875rem', // 14px
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },

  // 여백/간격 (Spacing)
  spacing: {
    0: '0px', // 간격 없음
    1: '4px', // 최소 간격
    2: '8px',
    3: '12px',
    4: '16px', // 기본 간격
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px', // 최대 간격
  },
};

export type EmotionTheme = typeof theme;
