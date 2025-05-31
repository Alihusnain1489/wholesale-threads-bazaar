
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">FabricWholesale</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium unstitched women's fabrics at wholesale rates. 
              Quality guaranteed, prices unmatched.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400">Fabric Collections</a></li>
              <li><a href="#" className="hover:text-purple-400">Wholesale Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400">Size Guide</a></li>
              <li><a href="#" className="hover:text-purple-400">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400">Lawn Collection</a></li>
              <li><a href="#" className="hover:text-purple-400">Chiffon Fabrics</a></li>
              <li><a href="#" className="hover:text-purple-400">Cotton Materials</a></li>
              <li><a href="#" className="hover:text-purple-400">Silk Collection</a></li>
              <li><a href="#" className="hover:text-purple-400">Printed Fabrics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-purple-400" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <span>orders@fabricwholesale.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-purple-900 rounded-lg">
              <p className="text-sm text-purple-200">
                <strong>Wholesale Hours:</strong><br />
                Mon-Sat: 9AM - 7PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FabricWholesale. All rights reserved. | Wholesale fabrics for the modern woman.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
