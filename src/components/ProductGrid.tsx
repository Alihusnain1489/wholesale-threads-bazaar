import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductGrid = ({ onAddToCart, showAllCategories = false, category, filter, searchQuery }) => {
  const [products] = useState([
    {
      id: 1,
      name: "Premium Lawn Suit",
      price: 2500,
      image: "Lawn11.jpg",
      category: "lawn",
      isNew: true,
      isSale: false,
      isBestseller: true
    },
    {
      id: 2,
      name: "Elegant Chiffon Collection",
      price: 3200,
      image: "chiphone22.jpeg",
      category: "chiffon",
      isNew: false,
      isSale: true,
      isBestseller: false
    },
    {
      id: 3,
      name: "Luxury Silk Fabric",
      price: 4500,
      image: "silk11.webp",
      category: "silk",
      isNew: true,
      isSale: false,
      isBestseller: true
    },
    {
      id: 4,
      name: "Cambric Cotton Suit",
      price: 1800,
      image: "cambridge1.jpg",
      category: "cambric",
      isNew: false,
      isSale: true,
      isBestseller: false
    },
    {
      id: 5,
      name: "Floral Chiffon Design",
      price: 2800,
      image: "Chiphone33.webp",
      category: "chiffon",
      isNew: true,
      isSale: false,
      isBestseller: false
    },
    {
      id: 6,
      name: "Premium Luxury Lawn",
      price: 3500,
      image: "chiphone11.webp",
      category: "lawn",
      isNew: false,
      isSale: false,
      isBestseller: true
    },
    {
      id: 7,
      name: "Traditional Silk",
      price: 5000,
      image: "silk.webp",
      category: "silk",
      isNew: true,
      isSale: true,
      isBestseller: false
    },
    {
      id: 8,
      name: "Cotton Lawn Mix",
      price: 2200,
      image: "lawn1.webp",
      category: "lawn",
      isNew: false,
      isSale: false,
      isBestseller: true
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filter by type
    if (filter) {
      switch (filter) {
        case 'new':
          filtered = filtered.filter(product => product.isNew);
          break;
        case 'sale':
          filtered = filtered.filter(product => product.isSale);
          break;
        case 'bestseller':
          filtered = filtered.filter(product => product.isBestseller);
          break;
        case 'premium':
          filtered = filtered.filter(product => product.price > 3000);
          break;
      }
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, category, filter, searchQuery]);

  const displayProducts = showAllCategories ? filteredProducts.slice(0, 6) : filteredProducts.slice(0, 4);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {displayProducts.map((product) => (
        <div key={product.id} className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <Link to={`/product/${product.id}`} className="block">
            <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
              {product.isSale && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </span>
              )}
            </div>
          </Link>
          
          <div className="p-3">
            <Link to={`/product/${product.id}`}>
              <h3 className="text-sm font-medium text-gray-900 mb-1 group-hover:text-green-600 transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>
            <p className="text-green-600 font-semibold text-sm mb-2">
              PKR {product.price.toLocaleString()} per meter
            </p>
            
            <div className="flex items-center justify-between">
              <Button
                size="sm"
                onClick={() => onAddToCart(product)}
                className="flex-1 mr-2 h-8 text-xs bg-green-600 hover:bg-green-700"
              >
                <ShoppingBag className="h-3 w-3 mr-1" />
                Add to Cart
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
              >
                <Heart className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
