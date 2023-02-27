import { RouteObject } from 'react-router-dom';
import { ShopsPage } from '../pages/ShopsPage/ShopsPage';

export const shopsRoute: RouteObject = {
  path: 'shops',
  element: <ShopsPage />,
};
