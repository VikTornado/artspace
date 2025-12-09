import Hero from '../features/home/Hero';
import FeaturedArtworks from '../features/home/FeaturedArtworks';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedArtworks />
    </div>
  );
}
