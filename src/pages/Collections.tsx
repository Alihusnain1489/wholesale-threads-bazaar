
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';
import { Button } from '@/components/ui/button';

const Collections = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      {/* Collections Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Premium Collections
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Wholesale Pakistani Fabrics
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover our complete range of authentic Pakistani unstitched fabrics at unbeatable wholesale rates
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-lg px-10 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Browse All Categories
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-800 text-lg px-10 py-4 rounded-full backdrop-blur-sm bg-white/10 font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Bulk Order Inquiry
              </Button>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
                <p className="text-blue-100">Premium Designs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
                <p className="text-blue-100">Minimum Order</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-300 mb-2">Free</div>
                <p className="text-blue-100">Delivery on 100+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid onAddToCart={addToCart} showAllCategories={true} />
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
};

export default Collections;
