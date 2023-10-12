import { Routes, Route } from "react-router-dom";

import { lazy } from "react";

import Loadable from "ui-component/Loadable";

import MainLayout from "layout/MainLayout";
import Projects from "views/projects";
import AboutUs from "views/aboutus";
import SamplePage from "views/sample-page";
import RequiredAuth from "routes/RequireAuth";
import Login from "views/pages/authentication/authentication3/Login3";
import Register from "views/pages/authentication/authentication3/Register3";
import NotFoundPage from "views/pages/NotFoundPage";
import AccountSettings from "views/pages/AccountSettings";
import AddProject from "views/projects/AddProject";

const CustomRoutes = () => {
  const DashboardDefault = Loadable(lazy(() => import("../views/dashboard/Default")));

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<MainLayout />}>
        <Route element={<RequiredAuth />}>
          <Route path="settings" element={<AccountSettings />} />
          <Route path="/" element={<DashboardDefault />} />
          <Route path="dashboard">
            <Route path="default" element={<DashboardDefault />} />
          </Route>
          <Route path="projects" element={<Projects />} />
          <Route path="addproject" element={<AddProject />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="sample-page" element={<SamplePage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default CustomRoutes;
