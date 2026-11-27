
import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '../../../layouts/main-layout/ui/MainLayout';
import { LandingPage } from '../../../pages/landing/ui/LandingPage';
import { LegalPage } from '../../../pages/legal/ui/LegalPage';

import { ServicesPage } from '../../../widgets/services/ui/ServicesPage';
import { BenefitsPage } from '../../../widgets/benefits/ui/BenefitsPage';
import { HowItWorksPage } from '../../../widgets/how-it-works/ui/HowItWorksPage';
import { DocumentsPage } from '../../../widgets/documents/ui/DocumentsPage';
import ContactPage from '../../../widgets/contact/ui/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'benefits',
        element: <BenefitsPage />,
      },
      {
        path: 'how-it-works',
        element: <HowItWorksPage />,
      },
      {
        path: 'documents',
        element: <DocumentsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'privacy-policy',
        element: <LegalPage type="privacy" />,
      },
      {
        path: 'terms-of-service',
        element: <LegalPage type="terms" />,
      },
      {
        path: 'cookie-policy',
        element: <LegalPage type="cookies" />,
      },
    ],
  },
]);
