import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useGallery } from '../../context/GalleryContext';
import ArtworkCard from './ArtworkCard';
import FilterBar from './FilterBar';
import Modal from '../../components/ui/Modal';
import PaymentModal from '../../components/ui/PaymentModal';
import Button from '../../components/ui/Button';

export default function GalleryGrid() {
  const [filter, setFilter] = useState('all');
  const [selectedWork, setSelectedWork] = useState(null);
  const [paymentWork, setPaymentWork] = useState(null);
  const { t } = useLanguage();
  const { works } = useGallery();

  const filteredWorks = filter === 'all' 
    ? works 
    : works.filter(work => work.category === filter);

  const handleBuy = (work) => {
    setPaymentWork(work);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">{t('gallery.title')}</h1>
        
        <FilterBar activeFilter={filter} onFilterChange={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <ArtworkCard 
              key={work.id} 
              work={work} 
              onClick={() => setSelectedWork(work)}
              onBuy={() => handleBuy(work)}
            />
          ))}
        </div>

        {/* Detail Modal */}
        <Modal isOpen={!!selectedWork} onClose={() => setSelectedWork(null)}>
          {selectedWork && (
            <div className="flex flex-col md:flex-row h-full max-h-[80vh] md:max-h-none">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src={selectedWork.image} 
                  alt={selectedWork.title} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between overflow-y-auto">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{selectedWork.title}</h2>
                  <p className="text-lg text-purple-600 dark:text-purple-400 mb-4">{selectedWork.artist}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedWork.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium capitalize">
                      {selectedWork.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{selectedWork.price}</span>
                  <Button size="lg" onClick={() => {
                    setSelectedWork(null);
                    handleBuy(selectedWork);
                  }}>{t('common.buy')}</Button>
                </div>
              </div>
            </div>
          )}
        </Modal>

        {/* Payment Modal */}
        <PaymentModal 
          isOpen={!!paymentWork} 
          onClose={() => setPaymentWork(null)} 
          work={paymentWork}
        />
      </div>
    </div>
  );
}
