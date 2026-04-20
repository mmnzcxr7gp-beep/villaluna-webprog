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
    title: 'First Kiss Magic 😘',
    description: 'Butterflies, fireworks, and the sweetest moment of our lives 💖',
    image: us1,
  },
  {
    title: 'Hand-Holding Heaven 🙌',
    description: 'Fingers intertwined, hearts connected, walking through life together 🥰',
    image: us2,
  },
  {
    title: 'Love Letter Treasures 💌',
    description: 'Handwritten notes filled with I-love-yous that we reread forever 📚',
    image: us3,
  },
  {
    title: 'Couple Goals Achieved 🎯',
    description: 'Building our dream life one adorable moment at a time 💕',
    image: us4,
  },
  {
    title: 'Hugs That Last Forever 🤗',
    description: 'The best feeling in the world - wrapped in your arms eternally 🥺',
    image: us5,
  },
  {
    title: 'Future Love Plans 💍',
    description: 'Wedding bells, tiny feet pattering, adventures as a family ✨',
    image: us6,
  },
];

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8 bg-love-50">
      <section className="glass-panel rounded-[3rem] border-4 border-love-200/50 bg-white/70 p-12 shadow-2xl backdrop-blur-xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.35em] bg-gradient-to-r from-love-500 to-rose-500 bg-clip-text text-transparent">
              Our Love Journey
            </p>
            <h1 className="max-w-xl text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-love-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              Sam & Carla's
              <br className="hidden md:block" />
              <span className="text-5xl md:text-6xl">Adorable Romance 💕</span>
            </h1>
            <p className="mt-8 max-w-lg text-xl leading-8 text-love-700 font-medium">
              From shy glances to lifetime promises. Our love story is cuter than a kitten video 🐱💖
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <Button to="/" variant="secondary" className="px-8 py-4">
                🏠 Home Sweet Home
              </Button>
              <Button to="/article" variant="primary" className="px-8 py-4">
                💭 Read Our Story
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border-4 border-love-200/50 bg-love-50/80 shadow-2xl group hover:scale-105 transition-all duration-500">
              <img src={us7} alt="Us being extra cute 💕" className="full-image group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden rounded-[2rem] border-4 border-love-200/50 bg-rose-50/80 shadow-2xl group hover:scale-105 transition-all duration-500">
              <img src={us8} alt="More cuteness overload 🥰" className="full-image group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      <section className="glass-panel rounded-[3rem] border-4 border-love-200/50 bg-white/70 p-12 shadow-2xl backdrop-blur-xl">
        <div className="mb-12">
          <p className="text-[13px] font-bold uppercase tracking-[0.35em] bg-gradient-to-r from-love-500 to-rose-500 bg-clip-text text-transparent">
            Love Highlights
          </p>
          <h2 className="mt-6 text-3xl md:text-4xl font-black bg-gradient-to-r from-love-600 to-pink-500 bg-clip-text text-transparent">
            Moments That Make Us Blush 💖
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {menuItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[2.5rem] border-4 border-love-200/50 bg-white/60 shadow-xl group hover:-translate-y-4 hover:shadow-2xl transition-all duration-700 backdrop-blur-xl">
              <div className="h-72 overflow-hidden rounded-t-[2rem]">
                <img src={item.image} alt={item.title} className="full-image group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-black bg-gradient-to-r from-love-600 to-rose-500 bg-clip-text text-transparent">{item.title}</h3>
                <p className="text-lg leading-relaxed text-love-700 font-medium">{item.description}</p>
                <Button variant="primary" className="w-full mt-6">
                  💕 Feel The Love
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
