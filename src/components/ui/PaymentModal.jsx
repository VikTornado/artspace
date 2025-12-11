import { useState, useEffect } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Modal from './Modal';
import Button from './Button';

export default function PaymentModal({ isOpen, onClose, work }) {
  const { t } = useLanguage();
  const [status, setStatus] = useState('idle'); // idle, processing, success

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
    }
  }, [isOpen]);

  const handlePayment = () => {
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 text-center max-w-sm mx-auto">
        {status === 'idle' && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Confirm Purchase</h2>
            <div className="mb-6">
              <img 
                src={work?.image} 
                alt={work?.title} 
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{work?.title}</h3>
              <p className="text-purple-600 dark:text-purple-400 font-bold text-xl mt-1">{work?.price}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="w-full" onClick={onClose}>Cancel</Button>
              <Button className="w-full" onClick={handlePayment}>Confirm</Button>
            </div>
          </>
        )}

        {status === 'processing' && (
          <div className="py-12 flex flex-col items-center">
            <Loader2 size={48} className="text-purple-600 animate-spin mb-4" />
            <p className="text-lg font-medium text-gray-900 dark:text-white">Processing Transaction...</p>
            <p className="text-sm text-gray-500 mt-2">Please confirm in your wallet</p>
          </div>
        )}

        {status === 'success' && (
          <div className="py-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <Check size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Success!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You have successfully purchased <strong>{work?.title}</strong>.
            </p>
            <Button className="w-full" onClick={onClose}>Close</Button>
          </div>
        )}
      </div>
    </Modal>
  );
}
