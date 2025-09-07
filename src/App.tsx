import { QueryClientProvider } from '@tanstack/react-query';
import { Router } from './routes';
import { queryClient } from './utils';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalResetStyle, GlobalTypographyStyle, theme } from './styles';
import { ModalProvider } from './contexts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <Global styles={GlobalTypographyStyle} />
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
