import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { App } from '../App';
import { authRoutes } from './auth.route';
import { offersRoute } from './offers.route';
import { shopsRoute } from './shops.route';

const rootRoute: RouteObject = {
  element: <App />,
  path: '/',
};

export const router = createBrowserRouter([rootRoute, offersRoute, shopsRoute, ...authRoutes]);
