
import { ShoppingBag, Menu, Search, User, Heart, ChevronDown, X } from 'lucide-react';
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = ({ cartItemsCount, onCartClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
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
      {/* Top Navigation Bar - Hidden on mobile */}
      <div className="bg-gray-50 border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+92300000000" className="text-gray-600 hover:text-green-600 transition-colors">
                📞 Customer Service
              </a>
              <span className="hidden lg:inline text-gray-600">📍 Track Order</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">🚚 Free Delivery on Rs3000+</span>
              <span className="hidden lg:inline text-gray-600">💰 Best Wholesale Rates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Browse our collections</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    {/* Mobile Search */}
                    <form onSubmit={handleSearch} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search fabrics..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <Button type="submit" size="sm">
                        <Search className="h-4 w-4" />
                      </Button>
                    </form>
                    
                    {/* Lookbook Categories */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Lookbook</h3>
                      {lookbookCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="block py-2 text-gray-700 hover:text-green-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>

                    {/* Fabric Types */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Store</h3>
                      {fabricTypes.map((fabric) => (
                        <Link
                          key={fabric.name}
                          to={fabric.href}
                          className="block py-2 text-gray-700 hover:text-green-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {fabric.name}
                        </Link>
                      ))}
                    </div>

                    {/* Account Options */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Account</h3>
                      <div className="space-y-2">
                        <button className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors">
                          Sign In
                        </button>
                        <button className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors">
                          Create Account
                        </button>
                        <button className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors">
                          My Orders
                        </button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Left Navigation - Desktop only */}
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

            {/* Logo - Responsive */}
            <div className="flex items-center flex-1 lg:flex-none justify-center lg:justify-start">
              <Link to="/">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded text-white flex items-center justify-center font-bold">
                    AB
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-green-600">
                    <span className="hidden sm:inline">Abid Bhai Store</span>
                    <span className="sm:hidden">AB Store</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Right side - Responsive */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search - Desktop */}
              <div className="relative hidden md:block">
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
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </div>
              
              {/* Wishlist - Hidden on small mobile */}
              <Button variant="ghost" size="sm" title="Wishlist" className="hidden sm:flex">
                <Heart className="h-5 w-5" />
              </Button>

              {/* Account - Desktop only */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" title="Account" className="hidden md:flex">
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
              
              {/* Cart */}
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

              {/* Currency - Hidden on mobile */}
              <span className="hidden md:inline text-sm font-medium">PKR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation - Responsive */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-4 sm:space-x-8 h-12 overflow-x-auto">
            <Link 
              to="/collections?filter=sale" 
              className="text-red-600 font-medium whitespace-nowrap hover:text-red-700 transition-colors text-sm sm:text-base"
            >
              Great Summer Sale
            </Link>
            <Link 
              to="/collections?filter=new" 
              className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600 transition-colors text-sm sm:text-base"
            >
              New Arrivals
            </Link>
            <Link 
              to="/collections?category=lawn" 
              className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600 transition-colors text-sm sm:text-base"
            >
              Lawn
            </Link>
            <Link 
              to="/collections?category=chiffon" 
              className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600 transition-colors text-sm sm:text-base"
            >
              Chiffon
            </Link>
            <Link 
              to="/collections?category=cambric" 
              className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600 transition-colors text-sm sm:text-base hidden sm:block"
            >
              Cambric
            </Link>
            <Link 
              to="/collections?category=silk" 
              className="text-gray-700 font-medium whitespace-nowrap hover:text-green-600 transition-colors text-sm sm:text-base hidden sm:block"
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
