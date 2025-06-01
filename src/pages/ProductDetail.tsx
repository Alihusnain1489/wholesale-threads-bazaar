
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  // Mock product data - in real app this would come from API
  const product = {
    id: 1,
    name: "3 Piece Printed Lawn Suit With Printed Lawn Dupatta",
    productCode: "SS-21-25-1-Green",
    price: 4390,
    pricePerMeter: 1463,
    inStock: 19,
    viewCount: 46,
    color: "Green",
    description: "Unstitched 3-Piece Printed Lawn Suit With Lawn Dupatta",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop"
    ],
    fabric: "Lawn",
    pieces: 3,
    includes: ["Shirt", "Dupatta", "Trouser"]
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemsCount={0} onCartClick={() => {}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6 text-sm">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="text-gray-400">›</span>
          <Link to="/collections" className="text-blue-600 hover:underline">Unstitched</Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-600">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg overflow-hidden">
              <Badge className="absolute top-4 left-4 bg-green-500 text-white z-10">NEW</Badge>
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 sm:h-[500px] object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Product view ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600">Product Code: {product.productCode}</p>
              </div>
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">PKR {product.price.toLocaleString()}</div>
              <div className="text-sm text-gray-600">PKR {product.pricePerMeter.toLocaleString()} per meter</div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-medium">In Stock</span>
              </div>
              <span className="text-sm text-gray-600">{product.viewCount} people are viewing this product right now</span>
            </div>

            <div className="text-sm text-gray-600">
              Hurry! only <span className="text-red-500 font-medium">{product.inStock}</span> left in stock.
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={decrementQuantity}
                  className="px-3 py-2"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={incrementQuantity}
                  className="px-3 py-2"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="flex-1 bg-black text-white hover:bg-gray-800 rounded-full py-3">
                <ShoppingCart className="h-5 w-5 mr-2" />
                ADD TO CART
              </Button>
            </div>

            {/* Product Tabs */}
            <div className="border-t pt-6">
              <div className="flex space-x-8 border-b">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2 px-1 border-b-2 transition-colors ${
                    activeTab === 'details' 
                      ? 'border-black text-black font-medium' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Product Details
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-2 px-1 border-b-2 transition-colors ${
                    activeTab === 'shipping' 
                      ? 'border-black text-black font-medium' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Shipping & Handling
                </button>
              </div>

              <div className="pt-4 space-y-4">
                {activeTab === 'details' ? (
                  <div className="space-y-3">
                    <p className="text-gray-700">{product.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Color:</span>
                        <span className="ml-2 font-medium">{product.color}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Fabric:</span>
                        <span className="ml-2 font-medium">{product.fabric}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Pieces:</span>
                        <span className="ml-2 font-medium">{product.pieces}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Includes:</span>
                        <span className="ml-2 font-medium">{product.includes.join(", ")}</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h4 className="font-medium mb-2">Shirt:</h4>
                      <p className="text-sm text-gray-600">Premium quality printed lawn fabric with intricate detailing</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>• Free delivery on orders above PKR 3000</p>
                    <p>• Standard delivery: 3-5 business days</p>
                    <p>• Express delivery: 1-2 business days</p>
                    <p>• Cash on delivery available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
