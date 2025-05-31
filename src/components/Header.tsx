
import { ShoppingBag, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = ({ cartItemsCount, onCartClick }) => {
  return (
    <header className="sticky top-0 z-50">
      {/* Upper Navbar - Dark Theme */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center space-x-6">
              <span className="text-yellow-400">📞 +92-XXX-XXXXXXX</span>
              <span className="hidden md:inline text-gray-300">✉️ info@abidbhaistore.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-yellow-400">🚚 Free Delivery on Orders 100+</span>
              <span className="hidden md:inline text-gray-300">💰 Wholesale Rates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar - Light Theme */}
      <div className="bg-white shadow-lg border-b-2 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:from-emerald-700 hover:to-teal-700 transition-all duration-300">
                  Abid Bhai Store
                </h1>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/collections" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors border-b-2 border-transparent hover:border-emerald-500 pb-1">
                Collections
              </Link>
              <a href="#lawn" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors border-b-2 border-transparent hover:border-emerald-500 pb-1">Lawn</a>
              <a href="#chiffon" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors border-b-2 border-transparent hover:border-emerald-500 pb-1">Chiffon</a>
              <a href="#cotton" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors border-b-2 border-transparent hover:border-emerald-500 pb-1">Cotton</a>
              <a href="#silk" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors border-b-2 border-transparent hover:border-emerald-500 pb-1">Silk</a>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-emerald-50">
                <Search className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onCartClick}
                className="relative hover:bg-emerald-50"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg">
                    {cartItemsCount}
                  </span>
                )}
              </Button>

              <Button variant="ghost" size="sm" className="md:hidden hover:bg-emerald-50">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
