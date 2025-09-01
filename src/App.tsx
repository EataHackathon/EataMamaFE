import { QueryClientProvider } from '@tanstack/react-query';
import { Router } from './routes';
import { queryClient } from './utils';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
