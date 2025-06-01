
import { Link } from 'react-router-dom';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "CAMBRIC",
      image: "cambridge1.jpg",
      description: "Traditional embroidered unstitched suits"
    },
    {
      id: 2,
      name: "LAWN",
      image: "Lawn11.jpg",
      description: "Vibrant lawn chiffon pattern collections"
    },
    {
      id: 3,
      name: "Silk",
      image: "silk11.webp",
      description: "Elegant floral unstitched fabrics"
    },
    {
      id: 4,
      name: "Chiffon",
      image: "chiphone22.jpeg",
      description: "Beautiful floral print collections"
    },
    {
      id: 5,
      name: "Cambric",
      image: "Chiphone33.webp",
      description: "Special mother's day collection"
    },
    {
      id: 6,
      name: "PREMIUM LUXURY",
      image: "chiphone11.webp",
      description: "Luxury unstitched fabric range"
    }
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Unstitched Fabric</h2>
        <div className="w-16 h-1 bg-green-500"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to="/collections"
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
            </div>
            <div className="mt-2 text-center">
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
