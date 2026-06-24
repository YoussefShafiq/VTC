import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/home'
import ServicesPage from './pages/services'
import AboutPage from './pages/about'
import ResourcesPage from './pages/resources'
import NotFoundPage from './pages/errors/NotFoundPage'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {

  // Scroll to top when route changes

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="services" element={<ServicesPage />} /> */}
          {/* <Route path="about" element={<AboutPage />} /> */}
          {/* <Route path="resources" element={<ResourcesPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
