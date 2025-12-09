import { Card, CardContent, CardFooter } from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function ArtworkCard({ work, onClick }) {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
      onClick={onClick}
    >
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
        <Button size="sm" onClick={(e) => {
          e.stopPropagation();
          // Buy logic
        }}>Buy Now</Button>
      </CardFooter>
    </Card>
  );
}
