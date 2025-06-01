
import { ShoppingBag, Menu, Search, User, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ cartItemsCount, onCartClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const fabricTypes = [
    { name: 'Lawn', href: '/collections?category=lawn' },
    { name: 'Chiffon', href: '/collections?category=chiffon' },
    { name: 'Cambric', href: '/collections?category=cambric' },
    { name: 'Silk', href: '/collections?category=silk' },
    { name: 'Cotton', href: '/collections?category=cotton' },
  ];

  const lookbookCategories = [
    { name: 'New Arrivals', href: '/collections?filter=new' },
    { name: 'Best Sellers', href: '/collections?filter=bestseller' },
    { name: 'Sale Items', href: '/collections?filter=sale' },
    { name: 'Premium Collection', href: '/collections?filter=premium' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Navigation Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+92300000000" className="text-gray-600 hover:text-green-600 transition-colors">
                📞 Customer Service
              </a>
              <span className="hidden md:inline text-gray-600">📍 Track Order</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">🚚 Free Delivery on Rs3000+</span>
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
            <nav className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 font-medium">
                      LOOKBOOK
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4">
                        {lookbookCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{category.name}</div>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-green-600 font-medium flex items-center">
                  STORE <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {fabricTypes.map((fabric) => (
                    <DropdownMenuItem key={fabric.name} asChild>
                      <Link to={fabric.href}>{fabric.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded text-white flex items-center justify-center font-bold">
                    AB
                  </div>
                  <span className="text-2xl font-bold text-green-600">Abid Bhai Store</span>
                </div>
              </Link>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search fabrics..."
                      className="w-48 px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      autoFocus
                      onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                    />
                    <Button type="submit" variant="ghost" size="sm" className="ml-1">
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hidden md:flex"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </div>
              
              <Button variant="ghost" size="sm" title="Wishlist">
                <Heart className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" title="Account">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Sign In</DropdownMenuItem>
                  <DropdownMenuItem>Create Account</DropdownMenuItem>
                  <DropdownMenuItem>My Orders</DropdownMenuItem>
                  <DropdownMenuItem>Account Settings</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onCartClick}
                className="relative"
                title="Shopping Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </Button>

              <span className="hidden md:inline text-sm font-medium">PKR</span>

              {/* Mobile Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/collections">All Collections</Link>
                  </DropdownMenuItem>
                  {fabricTypes.map((fabric) => (
                    <DropdownMenuItem key={fabric.name} asChild>
                      <Link to={fabric.href}>{fabric.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-8 h-12 overflow-x-auto">
            <Link 
              to="/collections?filter=sale" 
              className="text-red-600 font-medium whitespace-nowrap hover:text-red-700 transition-colors"
            >
              Great Summer Sale
            </Link>
            <Link 
              to="/collections?filter=new" 
              className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600 transition-colors"
            >
              New Arrivals
            </Link>
            <Link 
              to="/collections?category=lawn" 
              className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600 transition-colors"
            >
              Lawn
            </Link>
            <Link 
              to="/collections?category=chiffon" 
              className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600 transition-colors"
            >
              Chiffon
            </Link>
            <Link 
              to="/collections?category=cambric" 
              className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600 transition-colors"
            >
              Cambric
            </Link>
            <Link 
              to="/collections?category=silk" 
              className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600 transition-colors"
            >
              Silk
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
