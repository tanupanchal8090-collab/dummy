import { Users, Target, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function About() {
  const values = [
    { name: 'Quality First', icon: ShieldCheck },
    { name: 'Customer-Centric Approach', icon: Heart },
    { name: 'Sustainability', icon: Sparkles },
    { name: 'Innovation', icon: Target },
    { name: 'Transparency', icon: Users },
  ];

  return (
    <div className="bg-white pb-16 sm:pb-24">
      <Helmet>
        <title>About Us - Glow & Glam</title>
        <meta name="description" content="Learn about Glow & Glam's mission, vision, and team. We provide high-quality cosmetic and skincare products that enhance natural beauty." />
      </Helmet>

      {/* Header */}
      <div className="bg-rose-50 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 tracking-tight">About Glow & Glam</h1>
        <div className="mt-6 w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Founded in 2023, Glow & Glam is dedicated to providing high-quality cosmetic and skincare products that enhance natural beauty.
              </p>
              <p>
                Our mission is to empower individuals with products that are safe, effective, and suitable for all skin types. We believe that everyone deserves to feel confident in their own skin.
              </p>
            </div>
            
            <div className="mt-12 bg-rose-50 p-8 rounded-2xl border border-rose-100">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <Target className="h-6 w-6 text-rose-500 mr-3" />
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become a trusted global beauty brand known for innovation, quality, and customer satisfaction.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Skincare products" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Our Values</h2>
            <div className="mt-4 w-24 h-1 bg-rose-200 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-rose-200 transition-colors">
                <div className="inline-flex items-center justify-center p-3 bg-rose-50 rounded-full text-rose-600 mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-gray-900 font-medium">{value.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Our Team</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team consists of skincare specialists, cosmetic experts, and beauty enthusiasts who work together to review formulations and create products that deliver visible, healthy results.
          </p>
        </div>
      </div>
    </div>
  );
}
