import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function HomePage() {
  const navigate = useNavigate();

  const flowers = [
    {
      id: 1,
      name: 'Rose',
      description: 'The symbol of love and passion, roses are timeless beauties that capture hearts.',
      image: 'https://images.unsplash.com/photo-1584273540121-61f2dafb3cad?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Tulip',
      description: 'Elegant and vibrant, tulips bring spring colors to any garden or bouquet.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Sunflower',
      description: 'Golden and cheerful, sunflowers radiate happiness and warmth to all.',
      image: 'https://images.unsplash.com/photo-1597848212624-b06e93cca1e2?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-flower-cream via-flower-pink/10 to-flower-lavender/10 rounded-3xl mb-16 overflow-hidden">
        <div className="absolute top-10 right-10 text-6xl animate-float opacity-30">🌺</div>
        <div className="absolute bottom-10 left-10 text-5xl animate-float opacity-30" style={{ animationDelay: '1s' }}>🌸</div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-flower-dark mb-6 animate-slide-up">
            Discover the Beauty of Flowers
          </h1>
          <p className="font-poppins text-lg md:text-xl text-flower-dark/70 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Explore the elegance, grace, and wonder of nature's most colorful creations. Learn about different flowers, their meanings, and how to care for them.
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              text="Explore Now"
              onClick={() => navigate('/articles')}
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Featured Flowers Section */}
      <section>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-flower-dark text-center mb-4">
          Featured Flowers
        </h2>
        <p className="text-center text-flower-dark/60 mb-12 font-poppins">
          Discover some of our most beloved blooms
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {flowers.map((flower, index) => (
            <div
              key={flower.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-flower-pink/20 to-flower-lavender/20">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-flower-dark mb-3">
                  {flower.name}
                </h3>
                <p className="font-poppins text-flower-dark/70 mb-6 text-sm leading-relaxed">
                  {flower.description}
                </p>
                <Button
                  text="Learn More"
                  onClick={() => navigate('/articles')}
                  variant="secondary"
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
