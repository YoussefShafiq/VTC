import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/home'
import ServicesPage from './pages/services'
import ServiceDetailPage from './pages/services/detail'
import AboutPage from './pages/about'
import LeadershipPage from './pages/leadership'
import CareersPage from './pages/careers'
import CareerJobDetailPage from './pages/careers/detail'
import ResourcesPage from './pages/resources'
import ContactPage from './pages/contact'
import TermsOfUsePage from './pages/legal/terms-of-use'
import PrivacyPolicyPage from './pages/legal/privacy-policy'
import SmsTermsPage from './pages/legal/sms-terms'
import NotFoundPage from './pages/errors/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="leadership" element={<LeadershipPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="careers/:slug" element={<CareerJobDetailPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="legal/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="legal/sms-terms" element={<SmsTermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
