import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Sun, Moon, Wallet, Menu } from 'lucide-react';
import { useState } from 'react';
import WalletConnect from '../../features/wallet/WalletConnect';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ArtSpace
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/gallery" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            {t('nav.gallery')}
          </Link>
          <Link to="/artists" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            {t('nav.artists')}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-bold text-sm"
            aria-label="Toggle Language"
          >
            {language.toUpperCase()}
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <WalletConnect />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
            <Link to="/gallery" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>{t('nav.gallery')}</Link>
            <Link to="/artists" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>{t('nav.artists')}</Link>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 w-full justify-center">
              <Wallet size={18} />
              <span className="text-sm font-medium">{t('nav.connect')}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
