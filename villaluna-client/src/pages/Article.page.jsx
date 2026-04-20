import Button from '../assets/components/Button';
import us1 from '../assets/components/US1.jpeg';
import us2 from '../assets/components/US2.jpeg';
import us3 from '../assets/components/US3.jpeg';
import us4 from '../assets/components/US4.jpeg';
import us5 from '../assets/components/US5.jpeg';
import us7 from '../assets/components/US7.jpeg';
import us8 from '../assets/components/US8.jpeg';

const storyImages = [us1, us2, us3, us4];

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8 bg-rose-50">
      <section className="glass-panel rounded-[3rem] border-4 border-rose-200/50 bg-white/70 p-12 shadow-2xl backdrop-blur-xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-[13px] font-bold uppercase tracking-[0.35em] bg-gradient-to-r from-rose-500 to-love-500 bg-clip-text text-transparent">
              Our Forever Love
            </p>
            <h1 className="max-w-3xl text-5xl md:text-6xl font-black leading-tight bg-gradient-to-r from-rose-600 via-love-500 to-pink-500 bg-clip-text text-transparent">
              How We Fell Madly
              <br />
              <span className="text-4xl md:text-5xl">In Love 💖</span>
            </h1>
            <p className="max-w-xl text-xl leading-8 text-rose-700 font-medium">
              One smile led to butterflies, butterflies led to blushes, blushes led to our happily ever after 🦋💕
            </p>
            <div className="flex flex-wrap gap-6">
              <Button to="/" variant="secondary" className="px-8 py-4">
                🏠 Back To Love
              </Button>
              <Button to="/about" variant="primary" className="px-8 py-4">
                💕 More Memories
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {storyImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-[2.5rem] border-4 border-love-200/50 bg-rose-50/80 shadow-2xl group hover:scale-105 transition-all duration-500">
                <img src={src} alt={`Our love visual ${index + 1} 💕`} className="full-image group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-panel rounded-[3rem] border-4 border-love-200/50 bg-white/70 p-12 shadow-2xl backdrop-blur-xl">
        <div className="mb-12">
          <p className="text-[13px] font-bold uppercase tracking-[0.35em] bg-gradient-to-r from-rose-500 to-love-500 bg-clip-text text-transparent">
            What Makes Us Us
          </p>
          <h2 className="mt-6 text-3xl md:text-4xl font-black bg-gradient-to-r from-love-600 to-rose-500 bg-clip-text text-transparent">
            Our Super Cute Love Vibes ✨
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: '💕',
              title: 'Butterfly Kisses',
              subtitle: 'Daily magic',
              copy: 'Soft kisses that make our hearts skip beats every single time 🦋😘',
            },
            {
              icon: '🤗',
              title: 'Cuddle Experts',
              subtitle: '24/7 service',
              copy: 'Netflix marathons and endless snuggles. Perfect cozy therapy 🛋️💖',
            },
            {
              icon: '🌍',
              title: 'Adventure Buddies',
              subtitle: 'World explorers',
              copy: 'Hand in hand through cities, beaches, mountains. Best travel partner ever ✈️🚗',
            },
            {
              icon: '💍',
              title: 'Forever Promises',
              subtitle: 'Lifetime commitment',
              copy: 'Future plans, wedding dreams, baby giggles. Our happy ending starts now 🥺💒',
            },
          ].map((value) => (
            <article key={value.title} className="rounded-[2rem] border-4 border-love-200/50 bg-rose-50/80 p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-love-100/80 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                {value.icon}
              </div>
              <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-rose-500 to-love-500 bg-clip-text text-transparent">
                {value.subtitle}
              </p>
              <h3 className="mt-4 text-2xl font-black text-love-900 group-hover:text-rose-600 transition-colors">{value.title}</h3>
              <p className="mt-4 text-lg leading-7 text-rose-700 font-medium">{value.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
