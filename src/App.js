import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ==============================|| APP ||============================== //
const queryClient = new QueryClient();
const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};
export default App;
