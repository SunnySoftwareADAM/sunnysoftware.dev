import React from 'react';
import type { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployeePrivateRoute from './components/PrivateRoutes/EmployeePrivateRoute';
import ClientPrivateRoute from './components/PrivateRoutes/ClientPrivateRoute';
import AdminPrivateRoute from './components/PrivateRoutes/AdminPrivateRoute';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactUsPage from './pages/ContactUs/ContactUsPage';
import GetStartedPage from './pages/GetStartedPage/GetStartedPage';
import ClientPortalPage from './pages/ClientPortalPage/ClientPortalPage';
import AdminPortalPage from './pages/AdminPortal/AdminPortalPage';
import WorkPortalPage from './pages/WorkPortalPage/WorkPortalPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.scss';

const App: FunctionComponent = () => (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="contact-us" element={<ContactUsPage />} />
      <Route path="get-started" element={<GetStartedPage />} />
      <Route
        path="portal" element={(
          <ClientPrivateRoute>
            <ClientPortalPage />
          </ClientPrivateRoute>
        )}
      />
      <Route
        path="admin-portal" element={(
          <AdminPrivateRoute>
            <AdminPortalPage />
          </AdminPrivateRoute>
        )}
      />
      <Route
        path="work-portal" element={(
          <EmployeePrivateRoute>

            <WorkPortalPage />
          </EmployeePrivateRoute>
        )}
      />
      <Route path="about-us" element={<AboutUsPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route path="*" element={<b>404 That page does not exist!</b>} />
    </Routes>
    <Footer />
  </div>
);

export default App;
