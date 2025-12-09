import { useState } from 'react';
import { Wallet } from 'lucide-react';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';

export default function WalletConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = () => {
    // Stub connection logic
    setTimeout(() => {
      setIsConnected(true);
      setAddress('0x71C...9A21');
      setIsModalOpen(false);
    }, 1000);
  };

  return (
    <>
      <Button 
        variant={isConnected ? 'outline' : 'primary'}
        onClick={() => !isConnected && setIsModalOpen(true)}
        className="hidden md:flex items-center gap-2 rounded-full"
      >
        <Wallet size={18} />
        <span className="text-sm font-medium">
          {isConnected ? address : 'Connect Wallet'}
        </span>
      </Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
            <Wallet size={32} className="text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Connect Wallet</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Choose a wallet to connect to ArtSpace.
          </p>
          
          <div className="space-y-3">
            <button 
              onClick={handleConnect}
              className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all group"
            >
              <span className="font-semibold">MetaMask</span>
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Popular</span>
            </button>
            <button 
              onClick={handleConnect}
              className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all"
            >
              <span className="font-semibold">Coinbase Wallet</span>
            </button>
            <button 
              onClick={handleConnect}
              className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all"
            >
              <span className="font-semibold">WalletConnect</span>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
