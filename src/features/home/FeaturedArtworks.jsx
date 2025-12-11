import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Card, CardContent, CardFooter } from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const featuredWorks = [
  {
    id: 1,
    title: 'Cosmic Dreams',
    artist: 'StellarArt',
    image: `${import.meta.env.BASE_URL}images/cosmic-dreams.jpg`,
    price: '0.5 ETH',
  },
  {
    id: 2,
    title: 'Neon City',
    artist: 'CyberPunk',
    image: `${import.meta.env.BASE_URL}images/neon-city.jpg`,
    price: '0.8 ETH',
  },
  {
    id: 3,
    title: 'Abstract Mind',
    artist: 'CreativeSoul',
    image: `${import.meta.env.BASE_URL}images/abstract-mind.jpg`,
    price: '0.3 ETH',
  },
];

export default function FeaturedArtworks() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('gallery.title')}</h2>
          <Link to="/gallery">
            <Button variant="ghost">{t('common.view')}</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <Card key={work.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-1">{work.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">by {work.artist}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <span className="font-bold text-purple-600 dark:text-purple-400">{work.price}</span>
                <Button size="sm">{t('common.buy')}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
