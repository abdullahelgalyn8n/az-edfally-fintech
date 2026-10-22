/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SiteLayout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage, ServiceDetailPage } from './pages/ServicesPage';
import { AppsProductsPage, ProductDetailPage } from './pages/AppsProductsPage';
import { PartnersPage } from './pages/PartnersPage';
import { GalleryPage } from './pages/GalleryPage';
import { NewsPage, NewsDetailPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/apps" element={<AppsProductsPage />} />
          <Route path="/products" element={<Navigate to="/apps" replace />} />
          <Route path="/apps/:slug" element={<ProductDetailPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
