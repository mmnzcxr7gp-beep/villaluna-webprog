import Button from '../assets/components/Button';
import us1 from '../assets/components/US1.jpeg';
import us2 from '../assets/components/US2.jpeg';
import us3 from '../assets/components/US3.jpeg';
import us4 from '../assets/components/US4.jpeg';
import us5 from '../assets/components/US5.jpeg';
import us6 from '../assets/components/US6.jpeg';
import us7 from '../assets/components/US7.jpeg';
import us8 from '../assets/components/US8.jpeg';

const menuItems = [
  {
    title: 'Our First Date 💕',
    description: 'That magical evening when we first held hands and sparks flew everywhere 🥰',
    image: us1,
  },
  {
    title: 'Beach Cuddles 🌅',
    description: 'Lazy sunset walks, ice cream kisses, and promises to love forever 💖',
    image: us2,
  },
  {
    title: 'Coffee Dates ☕',
    description: 'Steamy lattes and heart eyes across the table. Our favorite ritual 💕',
    image: us3,
  },
  {
    title: 'Starry Nights 🌌',
    description: 'Picnic blankets, shooting stars, and wishes that all came true together ✨',
    image: us4,
  },
  {
    title: 'Road Trip Adventures 🚗',
    description: 'Singing off-key, dancing in gas stations, loving every silly moment 🥰',
    image: us5,
  },
  {
    title: 'Home Sweet Home 🏡',
    description: 'Cozy movie nights wrapped in each others arms. Perfect happiness 💞',
    image: us6,
  },
];

const features = [
  {
    title: 'Cuddle Sessions',
    description: 'Best therapy in the world. Netflix, popcorn, and endless hugs 🤗',
    image: us7,
    caption: 'Pure comfort 💕',
  },
  {
    title: 'Surprise Love Notes',
    description: 'Hidden hearts in lunchboxes and sweet texts at 2am. Always smiling 📝',
    image: us8,
    caption: 'Daily magic ✨',
  },
  {
    title: 'Dreamy Future Plans',
    description: 'Wedding ideas, baby names, and adventures we will share forever 🌈',
    image: us1,
    caption: 'Forever together 💍',
  },
  {
    title: 'Silly Inside Jokes',
    description: 'Only we understand the laughter. Our secret love language 😂',
    image: us2,
    caption: 'Our happiness 💖',
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen px-4 py-28 sm:px-6 lg:px-8 bg-love-50">
      <div className="mx-auto max-w-6xl space-y-16">
        <section id="hero" className="glass-panel rounded-[3rem] bg-white/70 p-12 shadow-2xl border border-love-200/50 backdrop-blur-xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <p className="text-[13px] font-bold uppercase tracking-[0.4em] bg-gradient-to-r from-love-500 to-rose-500 bg-clip-text text-transparent">
                Sam & Carla Love 💕
              </p>
              <h1 className="max-w-3xl text-5xl md:text-7xl font-black leading-none bg-gradient-to-r from-love-600 via-rose-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
                Our Super Cute
                <br />
                <span className="text-6xl md:text-8xl">Love Story 💖</span>
              </h1>
              <p className="max-w-xl text-xl leading-8 text-love-700 font-medium">
                From first butterflies to forever cuddles. Every moment with you feels like a fairytale 🦋✨
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="#memories" variant="primary">
                  💕 Sweet Memories
                </Button>
                <Button to="#dreams" variant="secondary">
                  💭 Our Dreams
                </Button>
              </div>
            </div>

            <div className="hero-panel mx-auto rounded-[3rem] border-4 border-love-200/50 bg-love-100 p-8 shadow-2xl">
              <img src={us3} alt="Us being adorable 💕" className="w-full h-96 rounded-[2.5rem] object-cover shadow-2xl" />
            </div>
          </div>
        </section>

        <section id="memories" className="glass-panel rounded-[3rem] bg-white/70 p-12 shadow-2xl border border-love-200/50 backdrop-blur-xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.4em] bg-gradient-to-r from-love-500 to-rose-500 bg-clip-text text-transparent">
            Precious Memories
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-black bg-gradient-to-r from-love-600 to-pink-500 bg-clip-text text-transparent">
            Moments That Melt Our Hearts 💖
          </h2>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-love-700">
            Every giggle, every hug, every "I love you" - collecting our favorite love adventures 🥰
          </p>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {menuItems.map((item, index) => (
              <article key={item.title} className="group rounded-[2.5rem] border-4 border-love-200/50 bg-white/60 shadow-xl backdrop-blur-xl hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl">
                <div className="overflow-hidden rounded-t-[2rem] h-72">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-black text-black group-hover:text-love-600 transition-colors">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-love-700 font-medium">{item.description}</p>
                  <Button variant="secondary" className="mt-4 w-full justify-center">
                    💕 Relive Moment
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="dreams" className="glass-panel rounded-[3rem] bg-white/70 p-12 shadow-2xl border border-love-200/50 backdrop-blur-xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.4em] bg-gradient-to-r from-love-500 to-rose-500 bg-clip-text text-transparent">
            Future Dreams
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-black bg-gradient-to-r from-love-600 to-pink-500 bg-clip-text text-transparent">
            What We Dream Together 🌟
          </h2>
          <div className="mt-16 grid gap-8 xl:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="flex h-full flex-col rounded-[2.5rem] border-4 border-love-200/50 bg-white/60 p-8 shadow-xl backdrop-blur-xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
                <img src={feature.image} alt={feature.title} className="mb-6 h-64 w-full rounded-[2rem] object-cover shadow-xl self-start" />
                <p className="text-lg italic font-medium text-love-600 mb-4">{feature.caption}</p>
                <p className="text-sm uppercase tracking-[0.3em] text-love-500 font-bold mb-4">Love Story</p>
                <h3 className="text-2xl font-black text-love-900 mb-4">{feature.title}</h3>
                <p className="text-lg leading-relaxed text-love-700 font-medium mb-8 flex-grow">{feature.description}</p>
                <Button variant="secondary" className="w-full justify-center">
                  💖 Feel The Love
                </Button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;

