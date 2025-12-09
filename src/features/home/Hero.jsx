import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../../components/ui/Button';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl"
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Link to="/gallery">
            <Button size="lg">{t('hero.explore')}</Button>
          </Link>
          <Link to="/upload">
            <Button variant="outline" size="lg">{t('hero.create')}</Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 opacity-20 blur-[100px] dark:opacity-30 pointer-events-none" />
    </section>
  );
}
