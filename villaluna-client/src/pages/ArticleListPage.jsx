import { useEffect, useState } from "react";
import Button from "../components/Button";
import ArticleService from "../services/ArticleService";

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const loadArticles = async () => {
      try {
        // Public page: show only active articles for visitors.
        const data = await ArticleService.getArticles({ status: "active" });
        setArticles(data);
      } catch (error) {
        setErrorMsg("Failed to load articles.");
      }
    };

    loadArticles();
  }, []);

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
            oopsiedaisy.mnl Journal
          </p>
          <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            The craft behind oopsiedaisy.mnl curation, care, and floral culture.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
            Dive into bouquet fundamentals, bloom care tips, arrangement history, and modern styling strategies for building a beautiful space.
          </p>
          <div className="mt-6">
            <Button to="/articles">Featured Articles</Button>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
              Complete Article Library
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              All floral guides and stories
            </h2>
          </div>

          {errorMsg ? (
            <p className="text-sm text-red-600">{errorMsg}</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {articles.map((article) => (
                <article key={article._id} className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-amber-700">{article.slug}</p>
                  <h3 className="mt-1 text-lg font-semibold text-zinc-900">{article.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{article.preview}</p>
                </article>
              ))}
              {articles.length === 0 && (
                <p className="text-sm text-zinc-600">No active articles available yet.</p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticleListPage;

