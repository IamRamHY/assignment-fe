import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants';
import ProtectedRoute from './protected-route';
import Login from '../modules/login/login';
import Dashboard from '../modules/dashboard/dashboard';

class AppRoutes extends Component {
  render(): JSX.Element {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.login} element={<Login />} />
          <Route
            path={ROUTES.dashboard}
            element={<ProtectedRoute component={<Dashboard />} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
