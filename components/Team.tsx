export default function Team() {
  return (
    <section id="team" className="bg-[#f8fafc] text-[#101923]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="section-kicker text-[#0f67a5]">04 / Team</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Built by traders who also build systems.</h2>
            <div className="mt-10 grid grid-cols-2 gap-px border border-[#c5d0d9] bg-[#c5d0d9]">
              <div className="bg-[#101923] p-5 text-white"><p className="text-3xl font-semibold text-[#58b6e7]">6</p><p className="mt-2 text-[10px] uppercase text-[#9cacba]">Person team</p></div>
              <div className="bg-white p-5"><p className="text-3xl font-semibold">30+</p><p className="mt-2 text-[10px] uppercase text-[#61707e]">Combined years</p></div>
            </div>
          </div>
          <div>
            <div className="border-t border-[#bdc8d1] py-8">
              <div className="grid gap-5 sm:grid-cols-[180px_1fr]">
                <div>
                  <h3 className="text-xl font-semibold">Jerry Li</h3>
                  <p className="mt-1 text-xs uppercase text-[#0f67a5]">Founder</p>
                </div>
                <p className="text-sm leading-7 text-[#586777]">
                  NYU Economics and Computer Science. More than five years of live crypto trading experience.
                </p>
              </div>
            </div>
            <div className="border-y border-[#bdc8d1] py-8">
              <div className="grid gap-5 sm:grid-cols-[180px_1fr]">
                <div>
                  <h3 className="text-xl font-semibold">Research team</h3>
                  <p className="mt-1 text-xs uppercase text-[#0f67a5]">Wall Street and Asia</p>
                </div>
                <p className="text-sm leading-7 text-[#586777]">
                  A six-person team from Wall Street and Asia with more than 30 years of combined experience. The strategy has been validated in global equity markets.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-xs font-semibold uppercase text-[#61707e]">
              <span>5-10M USD AUM</span>
              <span>Crypto HFT proprietary strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
