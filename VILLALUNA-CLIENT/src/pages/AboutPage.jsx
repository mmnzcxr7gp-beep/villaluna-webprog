import React from 'react';

function AboutPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="font-playfair text-5xl md:text-6xl font-bold text-flower-dark mb-8 text-center">
        About FloraBloom
      </h1>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Image Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-flower-pink to-flower-lavender rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop"
            alt="Flowers"
            className="relative rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 w-full object-cover h-96"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6 animate-slide-up">
          <h2 className="font-playfair text-3xl font-bold text-flower-dark">
            Celebrating Nature's Masterpiece
          </h2>

          <p className="font-poppins text-flower-dark/70 leading-relaxed">
            FloraBloom is dedicated to sharing the beauty, science, and culture of flowers from around the world. Whether you're a seasoned gardener or simply someone who appreciates the elegance of blooms, we're here to inspire and educate.
          </p>

          <p className="font-poppins text-flower-dark/70 leading-relaxed">
            Flowers are more than just beautiful decorations—they're symbols of emotions, milestones, and the resilience of nature. Each petal tells a story, each color holds a meaning, and each bloom represents the intricate wonders of our planet.
          </p>

          <p className="font-poppins text-flower-dark/70 leading-relaxed">
            Our mission is to connect people with flowers, helping them understand how to grow, appreciate, and celebrate these natural treasures in their own lives. Join us on this colorful journey!
          </p>

          <div className="flex gap-4 pt-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌼</span>
              <span className="font-poppins text-flower-dark font-medium">Beautiful</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="font-poppins text-flower-dark font-medium">Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💚</span>
              <span className="font-poppins text-flower-dark font-medium">Sustainable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <section className="mb-16">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-flower-dark text-center mb-12">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Beauty */}
          <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in hover:scale-105">
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-flower-pink/20 to-flower-lavender/20">
              <img
                src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=300&fit=crop"
                alt="Beauty"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-bold text-flower-dark mb-3">
                Beauty
              </h3>
              <p className="font-poppins text-flower-dark/70">
                We celebrate the natural beauty of flowers and encourage everyone to appreciate their elegance and visual splendor in everyday life.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in hover:scale-105" style={{ animationDelay: '0.1s' }}>
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-flower-green/20 to-flower-lavender/20">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
                alt="Education"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-bold text-flower-dark mb-3">
                Education
              </h3>
              <p className="font-poppins text-flower-dark/70">
                We provide comprehensive guides on flower care, growing techniques, and botanical knowledge to help you succeed in your floral journey.
              </p>
            </div>
          </div>

          {/* Sustainability */}
          <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in hover:scale-105" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-flower-cream/20 to-flower-green/20">
              <img
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop"
                alt="Sustainability"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-bold text-flower-dark mb-3">
                Sustainability
              </h3>
              <p className="font-poppins text-flower-dark/70">
                We promote eco-friendly practices in gardening and flower cultivation to protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-16">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-flower-dark text-center mb-12">
          Flower Diversity
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative h-80 rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&h=400&fit=crop"
              alt="Rose gallery"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
              <h3 className="text-white font-playfair text-3xl font-bold">Roses</h3>
            </div>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1603441291921-8d1b538e4ea5?w=600&h=400&fit=crop"
              alt="Orchid gallery"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
              <h3 className="text-white font-playfair text-3xl font-bold">Orchids</h3>
            </div>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1597848212624-b06e93cca1e2?w=600&h=400&fit=crop"
              alt="Sunflower gallery"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
              <h3 className="text-white font-playfair text-3xl font-bold">Sunflowers</h3>
            </div>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1600698332778-5f0c2e0d1190?w=600&h=400&fit=crop"
              alt="Tulip gallery"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
              <h3 className="text-white font-playfair text-3xl font-bold">Tulips</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-flower-pink/10 to-flower-lavender/10 rounded-3xl p-12 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-flower-dark mb-4">
          Join Our Floral Community
        </h2>
        <p className="font-poppins text-flower-dark/70 mb-8 max-w-2xl mx-auto">
          Connect with fellow flower enthusiasts, share your gardening experiences, and discover new ways to bring more beauty into your life.
        </p>
        <p className="font-poppins text-flower-dark font-medium text-lg">
          Together, we're growing a more beautiful world. 🌸
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
