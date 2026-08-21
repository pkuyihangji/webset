export default function Team() {
  return (
    <section id="team" className="bg-[#d7ff43] text-black">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black pt-6 lg:grid-cols-[0.28fr_0.72fr]">
          <div>
            <p className="section-kicker">04 / Team</p>
          </div>
          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Traders, researchers and systems builders.
            </h2>
          </div>
        </div>

        <div className="mt-20 grid border-y border-black lg:grid-cols-[0.62fr_0.38fr]">
          <div className="py-9 lg:pr-12">
            <div className="grid gap-5 sm:grid-cols-[0.28fr_0.72fr]">
              <div>
                <p className="mono text-[10px] font-bold uppercase">Founder</p>
                <h3 className="mt-3 text-3xl font-bold">Jerry Li</h3>
              </div>
              <p className="max-w-xl text-lg font-medium leading-8">NYU Economics and Computer Science. More than five years of live crypto trading experience.</p>
            </div>
            <div className="mt-9 grid gap-5 border-t border-black/20 pt-9 sm:grid-cols-[0.28fr_0.72fr]">
              <div>
                <p className="mono text-[10px] font-bold uppercase">Research team</p>
                <h3 className="mt-3 text-2xl font-bold">Wall Street & Asia</h3>
              </div>
              <p className="max-w-xl text-lg font-medium leading-8">A six-person team with more than 30 years of combined experience. The strategy has been validated in global equity markets.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-black lg:border-l lg:border-t-0">
            <div className="flex min-h-52 flex-col justify-between p-6 lg:p-8">
              <p className="mono text-[10px] font-bold uppercase">Team</p>
              <p className="text-7xl font-black">6</p>
            </div>
            <div className="flex min-h-52 flex-col justify-between border-l border-black p-6 lg:p-8">
              <p className="mono text-[10px] font-bold uppercase">Combined years</p>
              <p className="text-7xl font-black">30+</p>
            </div>
          </div>
        </div>

        <div className="mono mt-7 flex flex-wrap gap-x-10 gap-y-3 text-[10px] font-bold uppercase">
          <span>5-10M USD AUM</span>
          <span>Crypto HFT proprietary strategy</span>
        </div>
      </div>
    </section>
  );
}
