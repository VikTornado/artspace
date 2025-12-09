import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} ArtSpace. {t('footer.rights')}</p>
      </div>
    </footer>
  );
}
