
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-800 via-teal-700 to-green-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Abid Bhai Store
            <span className="block text-yellow-300">Premium Pakistani Fabrics</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-emerald-100">
            Authentic Pakistani unstitched fabrics at wholesale rates. From elegant lawn to luxurious silk - discover traditional craftsmanship today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant='outline' className="bg-white text-emerald-800 hover:bg-emerald-800 hover:text-white text-lg px-8 py-4 border-white">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg" className="border-white text-emerald-800 hover:bg-emerald-800 hover:text-white text-lg px-8 py-4">
              Wholesale Inquiry
            </Button>
          </div>
          <div className="mt-12 flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>Minimum Order: 25 pieces</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>Free Delivery on Orders 100+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
