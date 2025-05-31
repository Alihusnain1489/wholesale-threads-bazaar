
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Abid Bhai Store</h3>
            <p className="text-emerald-100 mb-4">
              Premium Pakistani unstitched fabrics at wholesale rates. 
              Your trusted partner for authentic quality and unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-emerald-300 hover:text-yellow-300 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-emerald-300 hover:text-yellow-300 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-emerald-300 hover:text-yellow-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h4>
            <ul className="space-y-2 text-emerald-100">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Fabric Collections</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Wholesale Pricing</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Categories</h4>
            <ul className="space-y-2 text-emerald-100">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Pakistani Lawn</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Chiffon Fabrics</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Cotton Materials</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Silk Collection</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Khaddar Fabrics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Contact Us</h4>
            <div className="space-y-3 text-emerald-100">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-300" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-300" />
                <span>orders@abidbhaistore.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-yellow-300" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-emerald-800/50 rounded-lg border border-emerald-700">
              <p className="text-sm text-emerald-200">
                <strong className="text-yellow-300">Wholesale Hours:</strong><br />
                Mon-Sat: 9AM - 7PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-emerald-200">
            <span>&copy; 2024 Abid Bhai Store. All rights reserved.</span>
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-red-400" />
            <span>for Pakistani fashion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
