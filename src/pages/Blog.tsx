import { Calendar, User, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const blogPosts = [
  {
    id: 1,
    title: '5 Daily Skincare Tips for Healthy Skin',
    category: 'Skincare Routine',
    date: 'Jun 10, 2026',
    author: 'Sarah Jenkins',
    excerpt: 'A consistent daily routine is the key to healthy, glowing skin. Here are our top 5 essential tips...',
    content: [
      'Cleanse your face twice daily to remove impurities.',
      'Stay hydrated by drinking plenty of water throughout the day.',
      'Use sunscreen regularly, even on cloudy days.',
      'Moisturize your skin immediately after washing.',
      'Get adequate sleep to allow your skin to repair itself.',
    ],
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Benefits of Vitamin C in Skincare',
    category: 'Ingredients',
    date: 'May 28, 2026',
    author: 'Dr. Emily Chen',
    excerpt: 'Vitamin C helps brighten the complexion, reduce pigmentation, and protect skin from environmental damage.',
    content: [
      'Vitamin C is a powerful antioxidant that protects skin cells from damaging free radicals.',
      'It plays a crucial role in collagen synthesis, keeping skin firm.',
      'Regular use can significantly lighten dark spots and hyperpigmentation.'
    ],
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'How to Choose the Right Moisturizer',
    category: 'Guides',
    date: 'May 15, 2026',
    author: 'Maya Patel',
    excerpt: 'Not all moisturizers are created equal. Select the right formula based on your unique skin type.',
    content: [
      'Dry Skin: Look for rich creams with ceramides and hyaluronic acid.',
      'Oily Skin: Opt for lightweight, oil-free, gel-based products.',
      'Combination Skin: Use lightweight lotions or gels that hydrate without feeling heavy.'
    ],
    image: 'https://images.unsplash.com/photo-1556228720-192a6df51b22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Makeup Trends in 2026',
    category: 'Trends',
    date: 'Apr 30, 2026',
    author: 'Chloe Adams',
    excerpt: 'Explore the latest beauty and makeup trends focusing on a natural, illuminated aesthetic.',
    content: [
      'Natural Glow Makeup: Highlighting the skin\'s natural texture.',
      'Soft Matte Lips: Comfortable, blurry lip colors over harsh lines.',
      'Skin-Focused Beauty: Skincare-infused makeup hybrids.',
      'Minimalist Makeup Looks: "No-makeup" makeup continues to reign supreme.'
    ],
    image: 'https://images.unsplash.com/photo-1512496015851-a1cbfd2f8bdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export function Blog() {
  return (
    <div className="bg-white pb-24">
      <Helmet>
        <title>Beauty & Skincare Blog - Glow & Glam</title>
        <meta name="description" content="Read our latest beauty and skincare tips, trends, and ingredient guides on the Glow & Glam blog." />
      </Helmet>

      {/* Header */}
      <div className="bg-rose-50 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 tracking-tight">Beauty & Skincare Blog</h1>
        <p className="mt-4 text-lg text-rose-600 max-w-2xl mx-auto px-4">
          Insights, tips, and trends to help you glow from the inside out.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 object-cover">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col flex-1 p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <span className="inline-flex items-center text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {post.date}
                  </span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 hover:text-rose-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                
                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Key Takeaways:</h3>
                  <ul className="space-y-2 mb-6">
                    {post.content.map((point, idx) => (
                      <li key={idx} className="flex text-sm text-gray-600">
                        <span className="text-rose-400 mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <button className="text-sm font-medium text-rose-600 hover:text-rose-700 flex items-center group">
                      Read more <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
