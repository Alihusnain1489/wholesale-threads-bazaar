
import { ShoppingBag, Menu, Search, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = ({ cartItemsCount, onCartClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Navigation Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <span className="text-gray-600">📞 Customer Service</span>
              <span className="hidden md:inline text-gray-600">📍 Track Order</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">🚚 Free Delivery on ₹3000+</span>
              <span className="hidden md:inline text-gray-600">💰 Best Wholesale Rates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">
                IDEAS REWARDS
              </Link>
              <Link to="/collections" className="text-gray-700 hover:text-green-600 font-medium">
                LOOKBOOK
              </Link>
              <a href="#store" className="text-gray-700 hover:text-green-600 font-medium">
                STORE
              </a>
            </nav>

            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded text-white flex items-center justify-center font-bold">
                    AB
                  </div>
                  <span className="text-2xl font-bold text-green-600">ideas</span>
                </div>
              </Link>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onCartClick}
                className="relative"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </Button>

              <span className="hidden md:inline text-sm font-medium">₹ PKR</span>

              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-8 h-12 overflow-x-auto">
            <a href="#summer-sale" className="text-red-600 font-medium whitespace-nowrap hover:text-red-700">
              Great Summer Sale
            </a>
            <a href="#eid-edit" className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600">
              Eid Edit
            </a>
            <a href="#new-arrivals" className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600">
              New Arrivals
            </a>
            <a href="#women" className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600">
              Women
            </a>
            <a href="#lawn" className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600">
              Lawn
            </a>
            <a href="#chiffon" className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600">
              Chiffon
            </a>
            <a href="#cotton" className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600">
              Cotton
            </a>
            <a href="#silk" className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600">
              Silk
            </a>
            <a href="#fragrances" className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600">
              Fragrances
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
