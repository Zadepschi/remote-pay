
import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '../../../layouts/main-layout/ui/MainLayout';
import { LandingPage } from '../../../pages/landing/ui/LandingPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
    ],
  },
]);
