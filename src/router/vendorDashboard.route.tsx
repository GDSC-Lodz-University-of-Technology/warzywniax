import { RouteObject } from 'react-router-dom';
import { VendorDashboardPage } from 'pages/VendorDashboard/VendorDashboard';

export const vendorDashboardRoute: RouteObject = {
  element: <VendorDashboardPage />,
  path: 'dashboard',
};
