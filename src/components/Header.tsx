import { ShoppingBag, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left spacer for mobile menu */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Centered Logo */}
          <div className="flex items-center justify-center flex-1">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AB</span>
              </div>
              <h1 className="text-2xl font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
                Abid Bhai Store
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">

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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
// This function is not needed here because onCartClick is passed as a prop to Header.
// If you want a default implementation, you could do:

// function onCartClick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
//   event.preventDefault();
// }
