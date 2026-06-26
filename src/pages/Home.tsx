import { ArrowRight, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const featuredProducts = [
  { name: 'Glow Radiance Face Serum', price: '₹799', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Hydrating Moisture Cream', price: '₹599', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Vitamin C Brightening Cleanser', price: '₹449', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Rose Petal Toner', price: '₹399', image: 'https://images.unsplash.com/photo-1556228720-192a6df51b22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Matte Perfection Lipstick', price: '₹299', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const features = [
  'Dermatologically Tested Products',
  'Cruelty-Free Formulations',
  'Natural Ingredients',
  'Fast & Secure Delivery',
  'Customer Satisfaction Guaranteed'
];

export function Home() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Glow & Glam - Premium Cosmetic Products</title>
        <meta name="description" content="Discover Glow & Glam's premium cosmetic products formulated to help you achieve healthy, radiant, and glowing skin. Shop serums, creams, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-rose-50 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 tracking-tight mb-6">
              Welcome to Glow & Glam
            </h1>
            <p className="text-xl sm:text-2xl text-rose-600 font-medium mb-8">
              Your Beauty, Your Confidence
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              At Glow & Glam, we believe skincare and beauty should be simple, effective, and affordable. Our premium cosmetic products are carefully formulated to help you achieve healthy, radiant, and glowing skin every day.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-full transition-colors duration-200 shadow-sm"
            >
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Featured Products</h2>
            <div className="mt-4 w-24 h-1 bg-rose-200 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                  />
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-rose-500 transition-colors shadow-sm backdrop-blur-sm">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <h3 className="text-sm font-medium text-gray-900 text-center px-2">
                  <Link to="/products">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-rose-600 font-semibold text-center">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-rose-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Why Choose Us?</h2>
            <div className="mt-4 w-24 h-1 bg-rose-200 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-rose-100">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <Heart className="h-5 w-5 fill-current" />
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl sm:text-3xl font-serif font-medium text-gray-900 leading-relaxed mb-8">
            "Glow & Glam products transformed my skincare routine. My skin feels healthier and brighter than ever!"
          </blockquote>
          <cite className="text-lg font-medium text-rose-600 not-italic">
            – Priya S.
          </cite>
        </div>
      </section>
    </div>
  );
}
