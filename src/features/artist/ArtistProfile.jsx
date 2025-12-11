import { MapPin, Link as LinkIcon, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import ArtworkCard from '../gallery/ArtworkCard';

// Mock Data
const artist = {
  name: 'StellarArt',
  username: '@stellar_art',
  bio: 'Digital artist exploring the boundaries of the cosmos through generative art and 3D rendering. Creating visual experiences that transcend reality.',
  avatar: `${import.meta.env.BASE_URL}images/avatar.jpg`,
  cover: `${import.meta.env.BASE_URL}images/cover.jpg`,
  location: 'Kyiv, Ukraine',
  website: 'stellar.art',
  stats: {
    followers: '12.5k',
    following: '450',
    views: '1.2M'
  },
  works: [
    { id: 1, title: 'Cosmic Dreams', artist: 'StellarArt', image: `${import.meta.env.BASE_URL}images/cosmic-dreams.jpg`, price: '0.5 ETH' },
    { id: 7, title: 'Nebula Whisper', artist: 'StellarArt', image: `${import.meta.env.BASE_URL}images/nebula-whisper.jpg`, price: '0.7 ETH' },
    { id: 8, title: 'Star Dust', artist: 'StellarArt', image: `${import.meta.env.BASE_URL}images/star-dust.jpg`, price: '0.4 ETH' },
  ]
};

export default function ArtistProfile() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20">
      {/* Cover Image */}
      <div className="h-64 md:h-80 w-full overflow-hidden">
        <img 
          src={artist.cover} 
          alt="Cover" 
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative -mt-20 mb-8 flex flex-col items-center md:items-start md:flex-row md:gap-8">
          {/* Avatar */}
          <div className="relative h-40 w-40 rounded-full border-4 border-white dark:border-gray-950 overflow-hidden shadow-xl">
            <img 
              src={artist.avatar} 
              alt={artist.name} 
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="mt-4 flex-1 text-center md:mt-20 md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{artist.name}</h1>
                <p className="text-purple-600 dark:text-purple-400 font-medium">{artist.username}</p>
              </div>
              <div className="flex gap-3 justify-center md:justify-start">
                <Button>{t('common.follow')}</Button>
                <Button variant="outline">{t('common.message')}</Button>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">{artist.bio}</p>

            <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{artist.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <LinkIcon size={16} />
                <a href={`https://${artist.website}`} className="hover:text-purple-600 transition-colors">{artist.website}</a>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-purple-600 transition-colors"><Twitter size={18} /></a>
                <a href="#" className="hover:text-purple-600 transition-colors"><Instagram size={18} /></a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 flex gap-8 justify-center md:justify-start border-t border-gray-200 dark:border-gray-800 pt-6">
              <div className="text-center md:text-left">
                <span className="block text-xl font-bold text-gray-900 dark:text-white">{artist.stats.followers}</span>
                <span className="text-sm text-gray-500">Followers</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-xl font-bold text-gray-900 dark:text-white">{artist.stats.following}</span>
                <span className="text-sm text-gray-500">Following</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-xl font-bold text-gray-900 dark:text-white">{artist.stats.views}</span>
                <span className="text-sm text-gray-500">Views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Works Tab */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Created Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artist.works.map((work) => (
              <ArtworkCard key={work.id} work={work} onClick={() => {}} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
