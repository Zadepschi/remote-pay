
import { Outlet } from 'react-router-dom';

import { Header } from '../../../widgets/header/ui/Header';
import { Footer } from '../../../widgets/footer/ui/Footer';
import { ScrollToTop } from '../../../shared/ui/scroll-to-top/ScrollToTop';

import styles from './MainLayout.module.scss';

export function MainLayout() {
  return (
    <div className={styles.layout}>
      <ScrollToTop />

      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
