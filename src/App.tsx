import { Route, Routes } from 'react-router-dom';
import { Layout, ScrollToAnchor } from './components/Layout';
import {
  BlogPage,
  FaqPage,
  ImprintPage,
  NotFoundPage,
  PressPage,
  PrivacyPage,
  TermsPage,
} from './pages/ContentPages';
import { HomePage } from './pages/HomePage';
import { PasswordForgotPage, PasswordResetPage } from './pages/PasswordPages';

export function App() {
  return (
    <>
      <ScrollToAnchor />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/presse" element={<PressPage />} />
          <Route path="/agb" element={<TermsPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          <Route path="/impressum" element={<ImprintPage />} />
          <Route path="/passwort-vergessen" element={<PasswordForgotPage />} />
          <Route path="/passwort-zuruecksetzen" element={<PasswordResetPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}
