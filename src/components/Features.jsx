import { features } from "../data/data";

export default function Features() {
  return (
    <section className="bg-surface px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-light text-primary sm:text-4xl">
            Why choose Easybank?
          </h2>

          <p className="mt-5 text-[15px] leading-6 text-muted">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="mt-12 grid gap-10 text-center sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8 lg:text-left">
          {features.map((feature) => (
            <article key={feature.title}>
              <img
                src={feature.icon}
                alt=""
                className="mx-auto h-16 w-16 lg:mx-0"
              />

              <h3 className="mt-6 text-xl font-light text-primary">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
