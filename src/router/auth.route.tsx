import { LoginPage } from 'pages/AuthPage/LoginPage/LoginPage';
import { RegisterPage } from 'pages/AuthPage/RegisterPage/RegisterPage';
import { RouteObject } from 'react-router-dom';

export const authRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: 'login',
  },
  {
    element: <RegisterPage />,
    path: 'register',
  },
];
