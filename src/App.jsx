import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { GalleryProvider } from './context/GalleryContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Artist from './pages/Artist';
import Upload from './pages/Upload';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <GalleryProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="artists" element={<Artist />} />
              <Route path="upload" element={<Upload />} />
            </Route>
          </Routes>
          </BrowserRouter>
        </GalleryProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
