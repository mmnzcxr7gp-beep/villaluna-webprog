import Button from "../components/Button";
import heroImg from "../assets/styles/OOPSIEDAISY BACKGROUND.jpg";
import card1Img from "../assets/styles/oops6.jpg";
import card2Img from "../assets/styles/oops7.jpg";
import card3Img from "../assets/styles/oops8.jpg";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
              Fresh Blooms
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              oopsiedaisy.mnl brings beauty, fragrance, and handcrafted bouquets to every moment.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              From seasonal arrangements to custom floral gifts, every bouquet is thoughtfully designed,
              freshly picked, and delivered with love.
            </p>
            <div className="mt-6 flex gap-3">
              <Button to="/about" variant="primary">
                Discover oopsiedaisy.mnl
              </Button>
              <Button to="/dashboard" className="!border-zinc-900 !bg-white !text-zinc-900 hover:!bg-zinc-900 hover:!text-white shadow-sm shadow-zinc-900/20">
                Admin Dashboard
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={heroImg}
                alt="Premium bouquets from oopsiedaisy.mnl"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
            Collection highlights
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            The numbers behind our bloom
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">500+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Hand-tied bouquets
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">50+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Seasonal specials
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">12</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Local farms
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24h</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Express delivery
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
            Featured drops
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Our latest arrangements
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={card1Img}
                alt="Garden Fresh Bouquets"
                className="h-48 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Garden Fresh Bouquets
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Vibrant mixes of seasonal blooms handpicked from local farms, perfect for any celebration.
            </p>
            <Button to="/articles" className="mt-4 w-full" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={card2Img}
                alt="Classic Rose Arrangements"
                className="h-48 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Classic Rose Arrangements
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Timeless elegance in every petal. Romantic reds, soft pinks, and pure whites for every heart.
            </p>
            <Button to="/articles" className="mt-4 w-full" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={card3Img}
                alt="Custom Floral Gifts"
                className="h-48 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Custom Floral Gifts
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Personalized creations designed for your special moments. Gifts as unique as your story.
            </p>
            <Button to="/articles" className="mt-4 w-full" variant="primary">
              View More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

