import { Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ScrollToHash from '@/components/layout/ScrollToHash';
import AccessibilityWidget from '@/components/ui/AccessibilityWidget';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
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
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Layout>
              <BlogPost />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <TermsPage />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <PrivacyPage />
            </Layout>
          }
        />
        <Route
          path="/accessibility"
          element={
            <Layout>
              <AccessibilityPage />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AccessibilityWidget />
      <ScrollToTop />
    </>
  );
}
