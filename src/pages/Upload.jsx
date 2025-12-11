import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload as UploadIcon, X, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useGallery } from '../context/GalleryContext';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

export default function Upload() {
  const { t } = useLanguage();
  const { addWork } = useGallery();
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'nft',
    price: '',
  });

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    setFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!preview || !formData.title || !formData.price) {
      alert('Please fill in all required fields and upload an image.');
      return;
    }

    const newWork = {
      title: formData.title,
      artist: 'You', // In a real app, this would come from the user profile
      category: formData.category,
      image: preview, // Using the data URL for local preview
      price: `${formData.price} ETH`,
      description: formData.description,
    };

    addWork(newWork);
    navigate('/gallery');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Upload Artwork</h1>
        
        <Card>
          <CardContent className="p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* File Upload Area */}
              <div 
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20' 
                    : 'border-gray-300 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input 
                  type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleChange}
                  accept="image/*"
                />
                
                {preview ? (
                  <div className="relative">
                    <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded-lg shadow-md" />
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        removeFile();
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
                      <UploadIcon size={32} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-900 dark:text-white">Drag and drop your artwork here</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">or click to browse files</p>
                    </div>
                    <p className="text-xs text-gray-400">Supports JPG, PNG, GIF up to 10MB</p>
                  </div>
                )}
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                  <input 
                    type="text" 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Cosmic Dreams"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                  <textarea 
                    rows="4"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Tell the story behind your artwork..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="nft">NFT</option>
                      <option value="photo">Photography</option>
                      <option value="painting">Painting</option>
                      <option value="ai">AI Art</option>
                      <option value="3d">3D</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price (ETH)</label>
                    <input 
                      type="number" 
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      placeholder="0.00"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full" size="lg" type="submit">Upload Artwork</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
