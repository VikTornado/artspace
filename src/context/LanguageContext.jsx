import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  uk: {
    nav: {
      home: 'Головна',
      gallery: 'Галерея',
      artists: 'Художники',
      upload: 'Завантажити',
      connect: 'Гаманець',
    },
    hero: {
      title: 'Відкрийте світ цифрового мистецтва',
      subtitle: 'ArtSpace - це простір для творців та колекціонерів.',
      explore: 'Дослідити',
      create: 'Створити',
    },
    gallery: {
      title: 'Галерея',
      filters: {
        all: 'Всі',
        nft: 'NFT',
        photo: 'Фотографія',
        painting: 'Живопис',
        ai: 'AI Art',
        '3d': '3D',
      },
    },
    footer: {
      rights: 'Всі права захищено.',
    }
  },
  en: {
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      artists: 'Artists',
      upload: 'Upload',
      connect: 'Wallet',
    },
    hero: {
      title: 'Discover the World of Digital Art',
      subtitle: 'ArtSpace is a space for creators and collectors.',
      explore: 'Explore',
      create: 'Create',
    },
    gallery: {
      title: 'Gallery',
      filters: {
        all: 'All',
        nft: 'NFT',
        photo: 'Photography',
        painting: 'Painting',
        ai: 'AI Art',
        '3d': '3D',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    }
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('uk');

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current === undefined || current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'uk' ? 'en' : 'uk'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
