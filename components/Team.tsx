export default function Team() {
  return (
    <section id="team" className="bg-[#f7f8f3] text-[#111512]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="section-kicker text-[#39756a]">04 / Team</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Built by traders who also build systems.</h2>
          </div>
          <div>
            <div className="border-t border-[#b9c0b9] py-8">
              <div className="grid gap-5 sm:grid-cols-[180px_1fr]">
                <div>
                  <h3 className="text-xl font-semibold">Jerry Li</h3>
                  <p className="mt-1 text-xs uppercase text-[#39756a]">Founder / Portfolio Manager</p>
                </div>
                <p className="text-sm leading-7 text-[#58635b]">
                  NYU Economics and Computer Science. More than five years in crypto trading, with a proprietary HFT market-making strategy live since 2024.
                </p>
              </div>
            </div>
            <div className="border-y border-[#b9c0b9] py-8">
              <div className="grid gap-5 sm:grid-cols-[180px_1fr]">
                <div>
                  <h3 className="text-xl font-semibold">Research team</h3>
                  <p className="mt-1 text-xs uppercase text-[#39756a]">Six specialists</p>
                </div>
                <p className="text-sm leading-7 text-[#58635b]">
                  Quantitative research, portfolio construction and execution experience across Wall Street and Asia, with more than 30 years of combined market experience.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-xs font-semibold uppercase text-[#647068]">
              <span>Research</span>
              <span>Portfolio construction</span>
              <span>Execution</span>
              <span>Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
