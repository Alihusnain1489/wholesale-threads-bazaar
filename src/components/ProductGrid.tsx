import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Eye, ZoomIn } from 'lucide-react';

const ProductGrid = ({ onAddToCart, showAllCategories = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedProducts, setLikedProducts] = useState(new Set());
  const location = useLocation();

  // Determine how many products to show based on route
  const isCollectionsPage = location.pathname === '/collections';
  const maxProducts = isCollectionsPage ? 6 : 4;

  const products = [
    {
      id: 1,
      name: "Premium Pakistani Lawn",
      category: "lawn",
      price: 850,
      originalPrice: 1200,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      colors: ["Blue", "Pink", "Green"],
      description: "Soft, breathable Pakistani lawn fabric perfect for summer wear",
      minOrder: 50,
      pieces: 3,
      views: 245,
      articleCode: "ABL001"
    },
    {
      id: 2,
      name: "Elegant Pakistani Chiffon",
      category: "chiffon",
      price: 1450,
      originalPrice: 1800,
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=300&fit=crop",
      colors: ["Black", "Navy", "Maroon"],
      description: "Luxurious Pakistani chiffon with intricate embroidery",
      minOrder: 30,
      pieces: 3,
      views: 189,
      articleCode: "ABC002"
    },
    {
      id: 3,
      name: "Pure Pakistani Cotton",
      category: "cotton",
      price: 750,
      originalPrice: 950,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop",
      colors: ["White", "Cream", "Beige"],
      description: "100% pure Pakistani cotton, perfect for everyday wear",
      minOrder: 60,
      pieces: 3,
      views: 312,
      articleCode: "APC003"
    },
    {
      id: 4,
      name: "Pakistani Silk Collection",
      category: "silk",
      price: 2200,
      originalPrice: 2800,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
      colors: ["Gold", "Silver", "Purple"],
      description: "Premium Pakistani silk fabric with golden threads",
      minOrder: 25,
      pieces: 3,
      views: 156,
      articleCode: "APS004"
    },
    {
      id: 5,
      name: "Printed Pakistani Lawn",
      category: "lawn",
      price: 920,
      originalPrice: 1150,
      image: "https://images.unsplash.com/photo-1542272454315-7ad9ed67e614?w=400&h=300&fit=crop",
      colors: ["Floral", "Geometric", "Abstract"],
      description: "Vibrant printed Pakistani lawn collection",
      minOrder: 45,
      pieces: 3,
      views: 278,
      articleCode: "APL005"
    },
    {
      id: 6,
      name: "Luxury Pakistani Chiffon",
      category: "chiffon",
      price: 1650,
      originalPrice: 2100,
      image: "https://images.unsplash.com/photo-1571513722275-4b8c3ba3dbb5?w=400&h=300&fit=crop",
      colors: ["Rose Gold", "Champagne", "Pearl"],
      description: "Premium Pakistani chiffon with pearl work",
      minOrder: 20,
      pieces: 3,
      views: 198,
      articleCode: "ALC006"
    },
    {
      id: 7,
      name: "Khaddar Collection",
      category: "cotton",
      price: 680,
      originalPrice: 850,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      colors: ["Brown", "Rust", "Olive"],
      description: "Traditional Pakistani khaddar fabric",
      minOrder: 70,
      pieces: 3,
      views: 134,
      articleCode: "AKC007"
    },
    {
      id: 8,
      name: "Banarasi Silk",
      category: "silk",
      price: 2800,
      originalPrice: 3500,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
      colors: ["Deep Red", "Royal Blue", "Emerald"],
      description: "Authentic Banarasi silk with zari work",
      minOrder: 15,
      pieces: 3,
      views: 89,
      articleCode: "ABS008"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'lawn', name: 'Lawn' },
    { id: 'chiffon', name: 'Chiffon' },
    { id: 'cotton', name: 'Cotton' },
    { id: 'silk', name: 'Silk' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products.slice(0, maxProducts)
    : products.filter(product => product.category === selectedCategory).slice(0, maxProducts);

  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100);
  };

  const toggleLike = (productId) => {
    setLikedProducts(prev => {
      const newLikes = new Set(prev);
      if (newLikes.has(productId)) {
        newLikes.delete(productId);
      } else {
        newLikes.add(productId);
      }
      return newLikes;
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {showAllCategories ? 'All Collections' : 'Pakistani Wholesale Collection'}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our authentic Pakistani fabric collection at unbeatable wholesale prices
        </p>
        {!isCollectionsPage && (
          <p className="text-sm text-emerald-600 mt-2">
            Showing {maxProducts} featured products
          </p>
        )}
      </div>

      {/* Category Filter - only show on collections page */}
      {showAllCategories && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-emerald-100 group">
            {/* Product Image */}
            <div className="relative h-64 bg-gray-200 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-500 text-white">
                  {calculateDiscount(product.originalPrice, product.price)}% OFF
                </Badge>
              </div>
              
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => toggleLike(product.id)}
                >
                  <Heart className={`h-4 w-4 ${likedProducts.has(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>

              {/* Pieces Count */}
              <div className="absolute bottom-4 left-4">
                <Badge variant="outline" className="bg-white/90 text-emerald-700 border-emerald-200">
                  {product.pieces} pieces
                </Badge>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <span className="text-xs text-gray-500">{product.articleCode}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              
              {/* Stats */}
              <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                <span>{product.views} views</span>
                <span>{likedProducts.has(product.id) ? (
                  <span className="text-red-500">♥ Liked</span>
                ) : (
                  '♡'
                )}</span>
              </div>
              
              {/* Colors */}
              <div className="mb-4">
                <span className="text-xs text-gray-500">Colors: </span>
                <span className="text-xs font-medium">{product.colors.join(", ")}</span>
              </div>

              {/* Pricing */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-emerald-600">₹{product.price}</span>
                <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
              </div>

              {/* Minimum Order */}
              <div className="mb-4">
                <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                  Min Order: {product.minOrder} pieces
                </Badge>
              </div>

              {/* Add to Cart Button */}
              <Button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transform hover:scale-105 transition-all duration-200"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
