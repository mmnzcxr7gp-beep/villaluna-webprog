import React from 'react';

function AboutPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="font-playfair text-5xl md:text-6xl font-bold text-flower-dark mb-8 text-center">
        About FloraBloom
      </h1>

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

          <div className="flex gap-4 pt-4">
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
    </div>
  );
}

export default AboutPage;
