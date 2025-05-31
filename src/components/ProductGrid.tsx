
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

const ProductGrid = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Premium Lawn Collection",
      category: "lawn",
      price: 850,
      originalPrice: 1200,
      image: "/placeholder.svg",
      colors: ["Blue", "Pink", "Green"],
      description: "Soft, breathable lawn fabric perfect for summer wear",
      minOrder: 50
    },
    {
      id: 2,
      name: "Elegant Chiffon Set",
      category: "chiffon",
      price: 1450,
      originalPrice: 1800,
      image: "/placeholder.svg",
      colors: ["Black", "Navy", "Maroon"],
      description: "Luxurious chiffon with intricate embroidery",
      minOrder: 30
    },
    {
      id: 3,
      name: "Pure Cotton Comfort",
      category: "cotton",
      price: 750,
      originalPrice: 950,
      image: "/placeholder.svg",
      colors: ["White", "Cream", "Beige"],
      description: "100% pure cotton, perfect for everyday wear",
      minOrder: 60
    },
    {
      id: 4,
      name: "Silk Sensation",
      category: "silk",
      price: 2200,
      originalPrice: 2800,
      image: "/placeholder.svg",
      colors: ["Gold", "Silver", "Purple"],
      description: "Premium silk fabric with golden threads",
      minOrder: 25
    },
    {
      id: 5,
      name: "Printed Lawn Delight",
      category: "lawn",
      price: 920,
      originalPrice: 1150,
      image: "/placeholder.svg",
      colors: ["Floral", "Geometric", "Abstract"],
      description: "Vibrant printed lawn collection",
      minOrder: 45
    },
    {
      id: 6,
      name: "Luxury Chiffon Elite",
      category: "chiffon",
      price: 1650,
      originalPrice: 2100,
      image: "/placeholder.svg",
      colors: ["Rose Gold", "Champagne", "Pearl"],
      description: "Premium chiffon with pearl work",
      minOrder: 20
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
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Wholesale Collection</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our premium unstitched fabric collection at unbeatable wholesale prices
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={selectedCategory === category.id ? "bg-purple-600 hover:bg-purple-700" : ""}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative h-64 bg-gray-200">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-500 text-white">
                  {calculateDiscount(product.originalPrice, product.price)}% OFF
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button size="sm" variant="secondary" className="p-2">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary" className="p-2">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              
              {/* Colors */}
              <div className="mb-4">
                <span className="text-sm text-gray-500">Available colors: </span>
                <span className="text-sm font-medium">{product.colors.join(", ")}</span>
              </div>

              {/* Pricing */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold text-purple-600">₹{product.price}</span>
                <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
              </div>

              {/* Minimum Order */}
              <div className="mb-4">
                <Badge variant="outline" className="text-xs">
                  Min Order: {product.minOrder} pieces
                </Badge>
              </div>

              {/* Add to Cart Button */}
              <Button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
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
