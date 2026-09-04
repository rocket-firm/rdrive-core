import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';

import Auth from 'containers/Authorization';
import DashboardScreenContainer from 'containers/DashboardScreenContainer';
import Kit from 'screens/Kit';
import authenticate from 'services/authenticate';
import TableScreenContainer from '../containers/TableScreenContainer';

const ProtectedRoute = ({ children }) => (
  authenticate() ? children : <Navigate to="/login/" replace />
);

const TableRoute = () => {
  const params = useParams();

  return (
    <ProtectedRoute>
      <TableScreenContainer match={{ params }} />
    </ProtectedRoute>
  );
};

export default () => (
  <BrowserRouter basename="/admin">
    <Routes>
      <Route path="/login/" element={<Auth />} />
      <Route path="/kit/" element={<Kit />} />
      <Route
        path="/dashboard/"
        element={(
          <ProtectedRoute>
            <DashboardScreenContainer />
          </ProtectedRoute>
        )}
      />
      <Route path="/models/:schema" element={<TableRoute />} />
      <Route path="*" element={<Navigate to="/dashboard/" replace />} />
    </Routes>
  </BrowserRouter>
);
