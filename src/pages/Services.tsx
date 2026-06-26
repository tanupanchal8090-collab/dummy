import { Sparkles, Flower2, HeartHandshake } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    id: 1,
    name: 'Personalized Skin Consultation',
    description: 'Get a 1-on-1 session with our skincare experts to understand your unique skin needs and receive a tailored product regimen.',
    price: '₹999',
    icon: HeartHandshake,
  },
  {
    id: 2,
    name: 'Glow Facial Treatment',
    description: 'A rejuvenating 60-minute facial that deep cleanses, gently exfoliates, and deeply hydrates using our premium Glow & Glam products.',
    price: '₹1,499',
    icon: Sparkles,
  },
  {
    id: 3,
    name: 'Bridal Makeup & Styling',
    description: 'Look your absolute best on your special day with our professional bridal makeup services featuring long-lasting, photo-ready cosmetics.',
    price: '₹5,999',
    icon: Flower2,
  }
];

export function Services() {
  return (
    <div className="bg-white pb-24">
      <Helmet>
        <title>Our Services - Glow & Glam</title>
        <meta name="description" content="Explore Glow & Glam's professional beauty services, including personalized skin consultations, facials, and bridal makeup." />
      </Helmet>

      {/* Header */}
      <div className="bg-rose-50 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 tracking-tight">Our Services</h1>
        <p className="mt-4 text-lg text-rose-600 max-w-2xl mx-auto px-4">
          Professional beauty and skincare services tailored to help you look and feel your best.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-4 bg-rose-50 rounded-2xl text-rose-600 mb-6 w-16 h-16">
                <service.icon className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{service.name}</h2>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <span className="text-xl font-bold text-rose-600">{service.price}</span>
                <button className="text-sm font-medium text-white bg-gray-900 px-6 py-3 rounded-full hover:bg-rose-600 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
