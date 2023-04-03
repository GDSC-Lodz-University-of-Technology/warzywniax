import { NewShopPage } from 'pages/NewShopPage/NewShopPage';
import { RouteObject } from 'react-router-dom';
import { ShopsPage } from '../pages/ShopsPage/ShopsPage';

export const newShopRoute: RouteObject = {
  element: <NewShopPage />,
  path: 'shops/new',
};

export const shopsRoute: RouteObject = {
  element: <ShopsPage />,
  path: 'shops',
};

export const shopRoutes = [newShopRoute, shopsRoute] as const;
