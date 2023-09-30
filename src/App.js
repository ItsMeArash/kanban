import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';

import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
// import Routes from 'routes';
import { Routes, Route } from 'react-router-dom';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Layout from 'layout/Layout';
import MainLayout from 'layout/MainLayout';
import Projects from 'views/projects';
import AboutUs from 'views/aboutus';
import SamplePage from 'views/sample-page';
import RequiredAuth from 'routes/RequireAuth';
import Login from 'views/pages/authentication/authentication3/Login3';
import Register from 'views/pages/authentication/authentication3/Register3';

// ==============================|| APP ||============================== //
const queryClient = new QueryClient();
const App = () => {
  const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

  const customization = useSelector((state) => state.customization);

  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <NavigationScroll>
            {/* <Routes /> */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<DashboardDefault />} />
                <Route path="dashboard">
                  <Route path="default" element={<DashboardDefault />} />
                </Route>
                <Route path="projects" element={<Projects />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route element={<RequiredAuth />}>
                  <Route path="sample-page" element={<SamplePage />} />
                </Route>
              </Route>
            </Routes>
          </NavigationScroll>
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};
export default App;
