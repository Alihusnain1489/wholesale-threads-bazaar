
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Cart = ({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      
      {/* Cart Panel */}
      <div className="relative ml-auto w-full max-w-md bg-white h-full overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart ({totalItems})</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md bg-gray-200"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-purple-600 font-semibold">₹{item.price}</p>
                  <Badge variant="outline" className="text-xs mt-1">
                    Min: {item.minOrder}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8 p-0"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Subtotal:</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="text-sm text-gray-500">
              * Bulk discounts available for orders above 100 pieces
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Proceed to Checkout
            </Button>
            <Button variant="outline" className="w-full">
              Request Wholesale Quote
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
