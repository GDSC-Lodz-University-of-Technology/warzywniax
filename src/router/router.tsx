import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { App } from '../App';
import { offersRoute } from './offers.route';
import { shopsRoute } from './shops.route';

const rootRoute: RouteObject = {
  element: <App />,
  path: '/',
};

export const ROUTER = createBrowserRouter([rootRoute, offersRoute, shopsRoute]);
