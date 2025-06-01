
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 300); // Wait for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-300 opacity-0 pointer-events-none">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto">
            AB
          </div>
          <h1 className="text-2xl font-bold text-green-600">Abid Bhai Store</h1>
          <p className="text-gray-600 mt-2">Premium Unstitched Fabrics</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-300">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-500 rounded text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto animate-pulse">
          AB
        </div>
        <h1 className="text-2xl font-bold text-green-600 animate-fade-in">Abid Bhai Store</h1>
        <p className="text-gray-600 mt-2 animate-fade-in">Premium Unstitched Fabrics</p>
        <div className="mt-6">
          <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
