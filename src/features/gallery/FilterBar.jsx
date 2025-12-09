import { useLanguage } from '../../context/LanguageContext';
import Button from '../../components/ui/Button';

const categories = ['all', 'nft', 'photo', 'painting', 'ai', '3d'];

export default function FilterBar({ activeFilter, onFilterChange }) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? 'primary' : 'outline'}
          onClick={() => onFilterChange(category)}
          className="capitalize"
        >
          {t(`gallery.filters.${category}`)}
        </Button>
      ))}
    </div>
  );
}
