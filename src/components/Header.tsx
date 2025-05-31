
import { ShoppingBag, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ cartItemsCount, onCartClick }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-emerald-700">Abid Bhai Store</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-700 font-medium">Collections</a>
            <a href="#" className="text-gray-700 hover:text-emerald-700 font-medium">Lawn</a>
            <a href="#" className="text-gray-700 hover:text-emerald-700 font-medium">Cambric</a>
            <a href="#" className="text-gray-700 hover:text-emerald-700 font-medium">Silk</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
