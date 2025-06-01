import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Eye, ZoomIn, Star, Share2 } from 'lucide-react';

const ProductGrid = ({ onAddToCart, showAllCategories = false }) => {
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [viewCounts, setViewCounts] = useState({});

  const products = [
    {
      id: 1,
      name: "Elegant Cambric Unstitched Suit",
      category: "cambric",
      price: 2850,
      pricePerMeter: 950,
      originalPrice: 3200,
      image: "cotton 5.webp",
      colors: ["White", "Cream", "Light Pink"],
      description: "Pure Cambric work unstitched suit with dupatta",
      minOrder: 5,
      pieces: 3,
      views: 245,
      rating: 4.5,
      reviews: 58,
      articleCode: "CAM001",
      fabric: "Pure Cambric",
      work: "Cambric Embroidery",
      includes: ["Shirt", "Dupatta", "Trouser"]
    },
    {
      id: 2,
      name: "Premium Lawn Unstitched Collection",
      category: "Lawn",
      price: 1450,
      pricePerMeter: 483,
      originalPrice: 1800,
      image: "lawn2.webp",
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
      category: "silk",
      price: 4750,
      pricePerMeter: 1583,
      originalPrice: 5950,
      image: "silk 4.webp",
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
      pricePerMeter: 733,
      originalPrice: 2800,
      image: "silk 5.webp",
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
      pricePerMeter: 640,
      originalPrice: 2150,
      image: "lawn1.webp",
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
      pricePerMeter: 1217,
      originalPrice: 4100,
      image: "cotton 3.webp",
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

  const displayCount = showAllCategories ? 6 : 4;
  const filteredProducts = products.slice(0, displayCount);

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
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group border h-full">
              {/* Product Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ transform: 'scale(1)' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
                
                {/* Badges */}
                <div className="absolute top-2 left-2">
                  <Badge className="bg-red-500 text-white text-xs">
                    {calculateDiscount(product.originalPrice, product.price)}% OFF
                  </Badge>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-2 right-2 flex flex-col space-y-1">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLike(product.id);
                    }}
                  >
                    <Heart className={`h-3 w-3 ${likedProducts.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white"
                    onClick={(e) => {
                      e.preventDefault();
                      incrementView(product.id);
                    }}
                  >
                    <Eye className="h-3 w-3 text-gray-600" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-2">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-xs text-gray-600">({product.reviews})</span>
                </div>

                {/* Fabric and Work Details */}
                <div className="space-y-1 mb-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Fabric:</span>
                    <span className="font-medium">{product.fabric}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Work:</span>
                    <span className="font-medium">{product.work}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">PKR {product.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 line-through">PKR {product.originalPrice.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-gray-600">PKR {product.pricePerMeter.toLocaleString()} per meter</div>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    onAddToCart(product);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2"
                >
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
