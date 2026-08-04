import { articles } from "../data/data";
export default function Articles() {
  return (
    <section className="bg-background px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-light text-primary sm:text-4xl lg:text-left">
          Latest Articles
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-md bg-gray-50"
            >
              <img
                src={article.image}
                alt=""
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-[10px] text-muted">By {article.author}</p>

                <h3 className="mt-2 text-lg font-light leading-6 text-primary transition-colors hover:text-green-500">
                  <a href="#">{article.title}</a>
                </h3>

                <p className="mt-3 text-xs leading-5 text-muted">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
