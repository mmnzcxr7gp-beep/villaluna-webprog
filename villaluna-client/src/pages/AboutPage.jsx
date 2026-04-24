import Button from "../components/Button";
import aboutHero from "../assets/styles/oops9.jpg";
import grid1 from "../assets/styles/oops10.jpg";
import grid2 from "../assets/styles/oops11.jpg";
import grid3 from "../assets/styles/oops2.jpg";
import grid4 from "../assets/styles/oops3.jpg";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={aboutHero}
                alt="oopsiedaisy.mnl floral showcase"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
              About oopsiedaisy.mnl
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A community-driven destination for fresh flowers and meaningful moments.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              At oopsiedaisy.mnl, we connect people with nature's finest blooms. Every bouquet is handcrafted,
              every arrangement is curated, and every customer joins a community that lives and breathes floral joy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
            Store overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            What makes oopsiedaisy.mnl unforgettable
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">05</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years blooming
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">100%</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Freshness guarantee
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">10k+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Happy customers
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Studio locations
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
              Behind the scenes
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              A story of passion, freshness, and community
            </h2>
            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Farm-fresh sourcing
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  We partner with trusted local farms and use careful quality checks to ensure every stem is vibrant and fresh.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Design-first curation
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Our florists live the craft. We handpick arrangements that matter, from timeless classics to modern artistic pieces.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Community rooted
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  oopsiedaisy.mnl is built by flower lovers, for flower lovers. Share moments, send joy, and grow with us.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
              Visual blooms
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="aspect-square overflow-hidden rounded-[1.25rem]">
                <img
                  src={grid1}
                  alt="Floral arrangement collection"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-[1.25rem]">
                <img
                  src={grid2}
                  alt="Clean white blooms"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-[1.25rem]">
                <img
                  src={grid3}
                  alt="Vibrant red bouquet"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-[1.25rem]">
                <img
                  src={grid4}
                  alt="Premium dried floral showcase"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <Button className="mt-5 w-full" variant="primary">
              View Our Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

