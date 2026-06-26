import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Helmet } from 'react-helmet-async';

const products = [
  { 
    id: 1,
    name: 'Glow Radiance Face Serum', 
    price: '₹799', 
    features: ['Brightens skin tone', 'Reduces dullness', 'Hydrates deeply'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 2,
    name: 'Hydrating Moisture Cream', 
    price: '₹599', 
    features: ['24-hour hydration', 'Suitable for dry skin', 'Lightweight formula'],
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 3,
    name: 'Vitamin C Brightening Cleanser', 
    price: '₹449', 
    features: ['Removes impurities', 'Improves skin glow', 'Rich in antioxidants'],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 4,
    name: 'Rose Petal Toner', 
    price: '₹399', 
    features: ['Refreshes skin', 'Tightens pores', 'Alcohol-free formula'],
    image: 'https://images.unsplash.com/photo-1556228720-192a6df51b22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 5,
    name: 'Matte Perfection Lipstick', 
    price: '₹299', 
    features: ['Long-lasting color', 'Smooth application', 'Available in multiple shades'],
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 6,
    name: 'Daily Sun Defense SPF 50', 
    price: '₹499', 
    features: ['Broad-spectrum protection', 'No white cast', 'Water-resistant'],
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 7,
    name: 'Exfoliating Walnut Face Scrub', 
    price: '₹349', 
    features: ['Removes dead skin cells', 'Unclogs pores', 'Gentle on skin'],
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 8,
    name: 'Overnight Repair Sleep Mask', 
    price: '₹899', 
    features: ['Repairs skin barrier', 'Boosts collagen', 'Intensive hydration'],
    image: 'https://images.unsplash.com/photo-1570194065650-d6a362ea716e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 9,
    name: 'Pure Hyaluronic Acid Serum', 
    price: '₹849', 
    features: ['Plumps fine lines', 'Deep moisture lock', 'Fast absorbing'],
    image: 'https://images.unsplash.com/photo-1608248593842-8010ba33c5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 10,
    name: 'Soothing Aloe Vera Gel', 
    price: '₹199', 
    features: ['Calms sunburn', 'Reduces redness', '100% natural aloe'],
    image: 'https://images.unsplash.com/photo-1556229167-9c927f8a7fe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 11,
    name: 'Purifying Charcoal Clay Mask', 
    price: '₹549', 
    features: ['Detoxifies skin', 'Controls excess oil', 'Minimizes pores'],
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  }
];

export function Products() {
  const { addToCart } = useCart();

  return (
    <div className="bg-white pb-24">
      <Helmet>
        <title>Our Products - Glow & Glam</title>
        <meta name="description" content="Shop Glow & Glam's premium cosmetic products, including face serums, moisture creams, lipsticks, and sun defense." />
      </Helmet>

      {/* Header */}
      <div className="bg-rose-50 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 tracking-tight">Our Products</h1>
        <p className="mt-4 text-lg text-rose-600 max-w-2xl mx-auto px-4">
          Discover our range of premium skincare and cosmetic items designed to elevate your beauty routine.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col group">
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/5] mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col flex-grow text-center">
                <h2 className="text-xl font-medium text-gray-900 mb-2">{product.name}</h2>
                <p className="text-lg font-bold text-rose-600 mb-4">{product.price}</p>
                <ul className="mb-6 space-y-2 text-sm text-gray-600 text-center flex-grow">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-rose-300 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                  })}
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-900 hover:bg-rose-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 mt-auto"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
