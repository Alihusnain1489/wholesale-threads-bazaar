
import { useState, useEffect } from 'react';
import { X, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FreeDeliveryPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-fade-in shadow-2xl">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2"
        >
          <X className="h-5 w-5" />
        </Button>
        
        <div className="text-center">
          <div className="bg-emerald-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Truck className="h-10 w-10 text-emerald-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Delivery!</h2>
          <p className="text-gray-600 mb-6">
            Get free delivery on orders above <span className="font-bold text-emerald-600">₹3,000</span>
          </p>
          
          <div className="bg-emerald-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-emerald-700 font-medium">
              🎉 Limited time offer - Save on shipping costs!
            </p>
          </div>
          
          <Button 
            onClick={() => setIsVisible(false)}
            className="w-full bg-emerald-600 hover:bg-emerald-700"
          >
            Start Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreeDeliveryPopup;
