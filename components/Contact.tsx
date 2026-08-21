export default function Contact() {
  return (
    <section id="contact" className="bg-[#b7ff6a] text-[#080b0a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-24">
        <div>
          <p className="section-kicker text-[#315e2c]">05 / Contact</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Start with the model. Then discuss the mandate.</h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#33502f]">
            We are accepting external capital to scale capacity, expand infrastructure and add senior talent. Contact us for strategy diligence and mandate terms.
          </p>
        </div>
        <a
          href="mailto:contact@positiveresearch.io"
          className="inline-flex min-h-12 items-center justify-center bg-[#080b0a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#243027]"
        >
          contact@positiveresearch.io
        </a>
      </div>
    </section>
  );
}
