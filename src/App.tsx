import { Route, Routes } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToHash from '@/components/layout/ScrollToHash';
import AccessibilityWidget from '@/components/ui/AccessibilityWidget';
import Home from '@/pages/Home';
import TermsPage from '@/pages/TermsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import AccessibilityPage from '@/pages/AccessibilityPage';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <Header />
              <TermsPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/privacy"
          element={
            <>
              <Header />
              <PrivacyPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/accessibility"
          element={
            <>
              <Header />
              <AccessibilityPage />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AccessibilityWidget />
    </>
  );
}
