
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Eye, ZoomIn, Star, Share2 } from 'lucide-react';

const ProductGrid = ({ onAddToCart, showAllCategories = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [viewCounts, setViewCounts] = useState({});

  const products = [
    {
      id: 1,
      name: "Elegant Chikankari Unstitched Suit",
      category: "lawn",
      price: 2850,
      originalPrice: 3200,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      colors: ["White", "Cream", "Light Pink"],
      description: "Pure cotton chikankari work unstitched suit with dupatta",
      minOrder: 1,
      pieces: 3,
      views: 245,
      rating: 4.5,
      reviews: 28,
      articleCode: "CHK001",
      fabric: "Pure Cotton",
      work: "Chikankari Embroidery",
      includes: ["Shirt", "Dupatta", "Trouser"]
    },
    {
      id: 2,
      name: "Premium Lawn Unstitched Collection",
      category: "chiffon",
      price: 1450,
      originalPrice: 1800,
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=300&fit=crop",
      colors: ["Blue", "Green", "Purple"],
      description: "Digital printed lawn unstitched suit with chiffon dupatta",
      minOrder: 1,
      pieces: 3,
      views: 189,
      rating: 4.3,
      reviews: 15,
      articleCode: "LAW002",
      fabric: "Lawn Cotton",
      work: "Digital Print",
      includes: ["Shirt", "Dupatta", "Trouser"]
    },
    {
      id: 3,
      name: "Luxury Silk Unstitched Ensemble",
      category: "cotton",
      price: 4750,
      originalPrice: 5950,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop",
      colors: ["Maroon", "Navy", "Golden"],
      description: "Pure silk unstitched suit with heavy embroidery work",
      minOrder: 1,
      pieces: 3,
      views: 312,
      rating: 4.8,
      reviews: 42,
      articleCode: "SLK003",
      fabric: "Pure Silk",
      work: "Heavy Embroidery",
      includes: ["Shirt", "Dupatta", "Trouser"]
    },
    {
      id: 4,
      name: "Trendy Digital Print Suit",
      category: "silk",
      price: 2200,
      originalPrice: 2800,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
      colors: ["Multi", "Black", "White"],
      description: "Contemporary digital print unstitched suit",
      minOrder: 1,
      pieces: 3,
      views: 156,
      rating: 4.2,
      reviews: 18,
      articleCode: "DIG004",
      fabric: "Khaddar",
      work: "Digital Print",
      includes: ["Shirt", "Dupatta", "Trouser"]
    },
    {
      id: 5,
      name: "Floral Paradise Unstitched",
      category: "lawn",
      price: 1920,
      originalPrice: 2150,
      image: "https://images.unsplash.com/photo-1542272454315-7ad9ed67e614?w=400&h=300&fit=crop",
      colors: ["Pink", "Yellow", "Green"],
      description: "Beautiful floral printed unstitched suit collection",
      minOrder: 1,
      pieces: 3,
      views: 278,
      rating: 4.6,
      reviews: 35,
      articleCode: "FLR005",
      fabric: "Cotton Lawn",
      work: "Floral Print",
      includes: ["Shirt", "Dupatta", "Trouser"]
    },
    {
      id: 6,
      name: "Royal Chiffon Collection",
      category: "chiffon",
      price: 3650,
      originalPrice: 4100,
      image: "https://images.unsplash.com/photo-1571513722275-4b8c3ba3dbb5?w=400&h=300&fit=crop",
      colors: ["Royal Blue", "Emerald", "Wine"],
      description: "Luxury chiffon unstitched suit with stone work",
      minOrder: 1,
      pieces: 3,
      views: 198,
      rating: 4.7,
      reviews: 22,
      articleCode: "CHF006",
      fabric: "Pure Chiffon",
      work: "Stone Work",
      includes: ["Shirt", "Dupatta", "Trouser"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'lawn', name: 'Lawn' },
    { id: 'chiffon', name: 'Chiffon' },
    { id: 'cotton', name: 'Cotton' },
    { id: 'silk', name: 'Silk' }
  ];

  const displayCount = showAllCategories ? 6 : 4;
  const filteredProducts = selectedCategory === 'all' 
    ? products.slice(0, displayCount)
    : products.filter(product => product.category === selectedCategory).slice(0, displayCount);

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

  const incrementView = (productId) => {
    setViewCounts(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {showAllCategories ? 'All Collections' : 'Featured Unstitched Collection'}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our authentic Pakistani unstitched fabric collection
        </p>
      </div>

      {/* Category Filter */}
      {showAllCategories && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>
      )}

      {/* Filters and Display Options */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Filters</span>
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Display</span>
          <div className="flex space-x-1">
            <div className="w-6 h-6 border border-gray-300 rounded grid grid-cols-2 gap-0.5 p-0.5">
              <div className="bg-gray-300 rounded-sm"></div>
              <div className="bg-gray-300 rounded-sm"></div>
              <div className="bg-gray-300 rounded-sm"></div>
              <div className="bg-gray-300 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border">
            {/* Product Image */}
            <div className="relative h-80 bg-gray-100 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              
              {/* Badges */}
              <div className="absolute top-3 left-3">
                <Badge className="bg-red-500 text-white text-xs">
                  {calculateDiscount(product.originalPrice, product.price)}% OFF
                </Badge>
              </div>
              
              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex flex-col space-y-2">
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white"
                  onClick={() => toggleLike(product.id)}
                >
                  <Heart className={`h-4 w-4 ${likedProducts.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </Button>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white"
                  onClick={() => incrementView(product.id)}
                >
                  <Eye className="h-4 w-4 text-gray-600" />
                </Button>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white"
                >
                  <ZoomIn className="h-4 w-4 text-gray-600" />
                </Button>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white"
                >
                  <Share2 className="h-4 w-4 text-gray-600" />
                </Button>
              </div>

              {/* Quick View Eye Icon */}
              <div className="absolute bottom-3 right-3">
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white rounded-full"
                  onClick={() => incrementView(product.id)}
                >
                  <Eye className="h-4 w-4 text-gray-600" />
                </Button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                <span className="text-xs text-gray-500 ml-2">{product.articleCode}</span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-600">({product.reviews})</span>
              </div>

              {/* Fabric and Work Details */}
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Fabric:</span>
                  <span className="font-medium">{product.fabric}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Work:</span>
                  <span className="font-medium">{product.work}</span>
                </div>
              </div>
              
              {/* Colors */}
              <div className="mb-3">
                <span className="text-xs text-gray-500">Colors: </span>
                <span className="text-xs font-medium">{product.colors.join(", ")}</span>
              </div>

              {/* Includes */}
              <div className="mb-3">
                <span className="text-xs text-gray-500">Includes: </span>
                <span className="text-xs font-medium">{product.includes.join(" + ")}</span>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                <span>{product.views + (viewCounts[product.id] || 0)} views</span>
                <span>{likedProducts.has(product.id) ? (
                  <span className="text-red-500 flex items-center">
                    <Heart className="h-3 w-3 fill-current mr-1" />
                    Liked
                  </span>
                ) : (
                  <Heart className="h-3 w-3" />
                )}</span>
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                </div>
                <Badge variant="outline" className="text-xs border-green-200 text-green-700">
                  {product.pieces} pieces
                </Badge>
              </div>

              {/* Add to Cart Button */}
              <Button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-200"
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
