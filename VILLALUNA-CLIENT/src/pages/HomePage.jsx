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
      <section className="mb-16">
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

      {/* Flower Gallery Section */}
      <section className="mb-16">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-flower-dark text-center mb-12">
          Flower Gallery
        </h2>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1490309847961-76e5eddae85b?w=300&h=400&fit=crop"
              alt="Colorful flowers"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-playfair text-lg font-bold">Mixed Blooms</span>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1490359659649-9f7d23e8e0b1?w=300&h=400&fit=crop"
              alt="Pink flowers"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-playfair text-lg font-bold">Pink Petals</span>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1599090150157-39ecb4ca85c0?w=300&h=400&fit=crop"
              alt="Purple flowers"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-playfair text-lg font-bold">Purple Hues</span>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1536763356920-ab7649ddd179?w=300&h=400&fit=crop"
              alt="White flowers"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-playfair text-lg font-bold">Pure White</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="bg-gradient-to-r from-flower-pink/10 to-flower-lavender/10 rounded-3xl p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1562181286-d3fee5d55364?w=300&h=300&fit=crop"
                alt="Flower arrangement"
                className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105"
              />
              <img
                src="https://images.unsplash.com/photo-1583456335163-2c5dde2c20c0?w=300&h=300&fit=crop"
                alt="Exotic flowers"
                className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105"
              />
              <img
                src="https://images.unsplash.com/photo-1604430694976-77f0c3c44b2f?w=300&h=300&fit=crop"
                alt="Garden flowers"
                className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105"
              />
              <img
                src="https://images.unsplash.com/photo-1559408776-19e58e1ef658?w=300&h=300&fit=crop"
                alt="Indoor plants"
                className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="font-playfair text-4xl font-bold text-flower-dark mb-6">
              Get Inspired by Nature
            </h2>
            <p className="font-poppins text-flower-dark/70 mb-4 leading-relaxed text-lg">
              Flowers have the power to transform any space into a beautiful sanctuary. Whether you're decorating your home, planning a garden, or simply seeking inspiration, flowers offer endless possibilities.
            </p>
            <p className="font-poppins text-flower-dark/70 mb-8 leading-relaxed text-lg">
              Discover tips, tricks, and ideas to make the most of these natural wonders in your life.
            </p>
            <Button
              text="View All Articles"
              onClick={() => navigate('/articles')}
              variant="primary"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
