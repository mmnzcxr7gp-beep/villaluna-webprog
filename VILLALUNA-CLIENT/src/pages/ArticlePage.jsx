import React from 'react';
import Button from '../components/Button';

function ArticlePage() {
  const articles = [
    {
      id: 1,
      title: 'The Meaning of Roses',
      preview: 'Discover the rich symbolism behind different rose colors and their deep cultural significance.',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop',
      category: 'Symbolism',
    },
    {
      id: 2,
      title: 'Top 10 Garden Flowers',
      preview: 'A comprehensive guide to the most beautiful and easy-to-grow flowers for your garden.',
      image: 'https://images.unsplash.com/photo-1604430694976-77f0c3c44b2f?w=400&h=300&fit=crop',
      category: 'Gardening',
    },
    {
      id: 3,
      title: 'How to Care for Indoor Plants',
      preview: 'Learn the essential tips and tricks to keep your indoor flowers thriving all year long.',
      image: 'https://images.unsplash.com/photo-1559408776-19e58e1ef658?w=400&h=300&fit=crop',
      category: 'Care Guide',
    },
    {
      id: 4,
      title: 'Seasonal Blooms Around the World',
      preview: 'Explore the most stunning flowers that bloom in each season across different continents.',
      image: 'https://images.unsplash.com/photo-1490309847961-76e5eddae85b?w=400&h=300&fit=crop',
      category: 'Travel',
    },
    {
      id: 5,
      title: 'Flower Arrangements 101',
      preview: 'Master the art of creating beautiful and balanced flower arrangements for any occasion.',
      image: 'https://images.unsplash.com/photo-1562181286-d3fee5d55364?w=400&h=300&fit=crop',
      category: 'DIY',
    },
    {
      id: 6,
      title: 'Rare and Exotic Flowers',
      preview: 'Discover the world\'s most unusual and breathtaking flowers from exotic locations.',
      image: 'https://images.unsplash.com/photo-1583456335163-2c5dde2c20c0?w=400&h=300&fit=crop',
      category: 'Exploration',
    },
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="font-playfair text-5xl md:text-6xl font-bold text-flower-dark mb-4 text-center">
        Oopsie Daisy — Flower Articles
      </h1>
      <p className="text-center text-flower-dark/60 mb-12 font-poppins text-lg max-w-2xl mx-auto">
        Dive into our collection of articles about flowers, gardening, care tips, and botanical wonders.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-flower-pink/20 to-flower-green/20">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-flower-pink text-white px-3 py-1 rounded-full text-xs font-poppins font-semibold">
                {article.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="font-playfair text-xl font-bold text-flower-dark mb-3 line-clamp-2">
                {article.title}
              </h3>
              <p className="font-poppins text-flower-dark/70 text-sm mb-6 flex-grow line-clamp-3">
                {article.preview}
              </p>
              <Button
                text="Read More"
                onClick={() => alert(`Article: ${article.title}`)}
                variant="primary"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlePage;
